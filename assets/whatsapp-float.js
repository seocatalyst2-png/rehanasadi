(function () {
  const cta = document.querySelector(".whatsapp-float-cta");
  if (!cta) return;

  if (!document.getElementById("wa-float-inline-styles")) {
    const style = document.createElement("style");
    style.id = "wa-float-inline-styles";
    style.textContent = `
      .whatsapp-float-cta {
        position: fixed;
        right: 18px;
        top: 50%;
        bottom: auto;
        z-index: 220;
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        padding: 0.72rem 1rem 0.72rem 0.74rem;
        border-radius: 999px;
        border: 1px solid #0d0d0c;
        background: #f5f2eb;
        color: #0d0d0c;
        text-decoration: none;
        font-size: 11px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        box-shadow: 0 10px 22px rgba(13, 13, 12, 0.2);
        transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        opacity: 0;
        pointer-events: none;
        transform: translateY(calc(-50% + 16px));
      }

      .whatsapp-float-cta:hover {
        transform: translateY(-50%) translateX(-2px);
        box-shadow: 0 14px 26px rgba(13, 13, 12, 0.28);
      }

      .whatsapp-float-cta.is-visible {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(-50%);
      }

      .wa-icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1px solid rgba(7, 94, 84, 0.24);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background: #25d366;
        flex-shrink: 0;
      }

      .wa-icon svg {
        width: 12px;
        height: 12px;
        display: block;
        fill: currentColor;
      }

      @media (max-width: 768px) {
        .whatsapp-float-cta {
          right: 12px;
          top: 50%;
          bottom: auto;
          padding: 0.62rem 0.82rem 0.62rem 0.64rem;
          font-size: 10px;
        }
        .wa-icon {
          width: 22px;
          height: 22px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  const revealOffset = 120;
  const toggleCta = () => {
    cta.classList.toggle("is-visible", window.scrollY > revealOffset);
  };

  toggleCta();
  window.addEventListener("scroll", toggleCta, { passive: true });
})();
