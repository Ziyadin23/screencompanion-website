// Progressive enhancement: every section and the first example are readable
// without JavaScript. Keyboard input never waits for an animation.
if (typeof window.requestAnimationFrame === 'function') {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const canAnimate = () => !reducedMotion.matches && document.documentElement.dataset.input !== 'keyboard';

  document.addEventListener('keydown', () => { document.documentElement.dataset.input = 'keyboard'; });
  document.addEventListener('pointerdown', () => { document.documentElement.dataset.input = 'pointer'; }, { passive: true });

  const demo = document.querySelector<HTMLElement>('[data-demo]');
  if (demo) {
    type Example = { name: string; prompt: string; content: string; answer: string; explanation: string };
    const examples: Example[] = JSON.parse(demo.dataset.examples || '[]');
    const trigger = demo.querySelector<HTMLButtonElement>('[data-demo-trigger]');
    const prompt = demo.querySelector<HTMLElement>('[data-prompt]');
    const question = demo.querySelector<HTMLElement>('[data-question]');
    const answer = demo.querySelector<HTMLElement>('[data-answer]');
    const explanation = demo.querySelector<HTMLElement>('[data-explanation]');
    const label = demo.querySelector<HTMLElement>('[data-example]');
    const pane = demo.querySelector<HTMLElement>('.answer-content');
    let current = 0;
    let animation: Animation | undefined;

    if (trigger && prompt && question && answer && explanation && label && pane && examples.length) {
      trigger.hidden = false;
      const runExample = () => {
        current = (current + 1) % examples.length;
        const next = examples[current];
        prompt.textContent = next.prompt;
        question.textContent = next.content;
        question.classList.toggle('demo-question--code', current === 1);
        answer.textContent = next.answer;
        answer.classList.toggle('demo-answer--words', current === 2);
        explanation.textContent = next.explanation;
        label.textContent = next.name;
        animation?.cancel();
        if (canAnimate()) {
          animation = pane.animate(
            [{ opacity: 0.35, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }],
            { duration: 220, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' },
          );
        }
      };
      trigger.addEventListener('click', runExample);
      demo.addEventListener('keydown', event => {
        if (event.ctrlKey && event.altKey && event.code === 'Space') {
          event.preventDefault();
          runExample();
        }
      });
    }
  }

  // Observe individual parts, not whole sections. Nothing starts hidden in CSS;
  // a browser without this API simply receives the finished composition.
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (!canAnimate()) continue;
        const element = entry.target as HTMLElement;
        const kind = element.dataset.reveal;
        const transform = kind === 'media' ? 'scale(0.97)' : kind === 'row' ? 'translateX(16px)' : 'translateY(20px)';
        const siblings = [...(element.parentElement?.children || [])].filter(child => (child as HTMLElement).hasAttribute('data-reveal'));
        const delay = Math.min(siblings.indexOf(element), 3) * 65;
        const duration = kind === 'media' ? 700 : 580;
        element.style.opacity = '0.45';
        element.style.transform = transform;
        // Let the start state paint once before transitioning to the final one.
        window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
          element.style.transition = `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`;
          element.style.transitionDelay = `${delay}ms`;
          element.style.opacity = '1';
          element.style.transform = 'none';
          window.setTimeout(() => {
            element.style.removeProperty('transition');
            element.style.removeProperty('transition-delay');
            element.style.removeProperty('opacity');
            element.style.removeProperty('transform');
          }, duration + delay + 80);
        }));
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
  }
}
