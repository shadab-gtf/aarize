// =========================================
// MOBILE MENU
// =========================================

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileCloseButton = document.getElementById("mobileCloseButton");
const mobileLinks = document.querySelectorAll(".mobile-link");

function openMenu() {
  mobileMenu.classList.add("active");
  mobileOverlay.classList.add("active");
  menuButton.classList.add("active");
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "Close menu");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  mobileMenu.classList.remove("active");
  mobileOverlay.classList.remove("active");
  menuButton.classList.remove("active");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open menu");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("active");
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

mobileCloseButton.addEventListener("click", closeMenu);
mobileOverlay.addEventListener("click", closeMenu);

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// =========================================
// RESPONSIVE IMAGES
// Maps "/images/highlights/highlight_11opt.webp" -> /images/opt/highlight_11-<w>.webp
// =========================================

const IMAGE_WIDTHS = [280, 400, 640, 800, 1000];

const optimizedSrcset = (path) => {
  const base = path.split("/").pop().replace(/(opt)?\.\w+$/, "");
  return IMAGE_WIDTHS.map((w) => `/images/opt/${base}-${w}.webp ${w}w`).join(", ");
};

const optimizedSrc = (path) => {
  const base = path.split("/").pop().replace(/(opt)?\.\w+$/, "");
  return `/images/opt/${base}-800.webp`;
};

// =========================================
// ENQUIRE CARD PARALLAX
// =========================================
(() => {
  const wrapper = document.getElementById("enquireCardAnimation");
  const card = document.getElementById("enquireParallaxCard");

  if (!wrapper || !card) return;

  let ticking = false;

  const updateParallax = () => {
    const rect = wrapper.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const progress = (viewportHeight / 2 - rect.top) / (viewportHeight + rect.height);
    const movement = Math.max(-1, Math.min(1, progress * 2 - 1)) * 8;

    card.style.transform = `translateY(${movement}rem)`;
    ticking = false;
  };

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", updateParallax);

  window.requestAnimationFrame(updateParallax);
})();
// =========================================
// PROPERTY HIGHLIGHTS
// =========================================

const propertyHighlights = [
  {
    image: "/images/highlights/highlight_11opt.webp",
    watermark: "Artistic Impression",
    title: "An architectural language with luxury as its innate feel"
  },
  {
    image: "/images/highlights/highlight_6opt.webp",
    watermark: "Artistic Impression",
    title: "A plush atrium space to provide grandeur and opulence"
  },
  {
    image: "/images/highlights/highlight_1opt.webp",
    watermark: "Artistic Impression",
    title: "Big anchor stores and retail shops of all variables offer a vast opportunity to the retailers"
  },
  {
    image: "/images/highlights/highlight_2opt.webp",
    watermark: "Artistic Impression",
    title: "Diverse entertainment zones to enrich recreation for the whole family"
  },
  {
    image: "/images/highlights/highlight_3opt.webp",
    watermark: "Artistic Impression",
    title: "Valet parking"
  },
  {
    image: "/images/highlights/highlight_9opt.webp",
    watermark: "Artistic Impression",
    title: "Pod cafes to provide an elevated lounging experience"
  },
  {
    image: "/images/highlights/highlight_4opt.webp",
    watermark: "Artistic Impression",
    title: "Advanced security & surveillance system"
  },
  {
    image: "/images/highlights/highlight_5opt.webp",
    watermark: "Artistic Impression",
    title: "Automated car parking systems"
  }
];

const highlightGrid = document.getElementById("highlightGrid");

propertyHighlights.forEach((item, index) => {
  const card = document.createElement("article");
  card.className = "!flex !w-full !flex-col";

  if (index < 4) {
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-duration", "500");
    card.setAttribute("data-aos-delay", `${index * 50}`);
    card.setAttribute("data-aos-once", "true");
  }

  card.innerHTML = `
    <div class="!relative !aspect-[4/3] !w-full !overflow-hidden !rounded-[0.2rem] !bg-white">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="${optimizedSrc(item.image)}" data-srcset="${optimizedSrcset(item.image)}" sizes="(min-width: 80rem) calc((100vw - 17rem) / 4), (min-width: 48rem) calc((100vw - 15.25rem) / 2), (min-width: 40rem) calc((100vw - 5.25rem) / 2), calc(100vw - 4rem)" alt="${item.title}" class="!block !h-full !w-full !object-cover" loading="lazy" decoding="async">
      <span class="!absolute !bottom-[0.35rem] !left-[0.4rem] !z-10 !text-[0.45rem] !font-normal !leading-none !text-white sm:!bottom-[0.45rem] sm:!left-[0.5rem] sm:!text-[0.5rem] lg:!bottom-[0.5rem] lg:!left-[0.5rem] lg:!text-[0.5rem] xl:!text-[0.55rem]">${item.watermark}</span>
    </div>
    <div class="!px-[0.15rem] !pt-[0.9rem] !text-center sm:!pt-[1rem] lg:!pt-[1.1rem]">
      <p class="!font-body !text-[0.65rem] !font-semibold !leading-[1.65] !text-black/75 sm:!text-[0.7rem] lg:!text-[0.95rem] xl:!text-[0.95rem]">${item.title}</p>
    </div>
  `;

  highlightGrid.appendChild(card);
});

// =========================================
// GALLERY
// =========================================

const galleryImages = [
  { image: "/images/highlights/highlight_11opt.webp", watermark: "Artistic Impression" },
  { image: "/images/highlights/highlight_12opt.webp", watermark: "Artistic Impression" },
  { image: "/images/highlights/highlight_6opt.webp", watermark: "Artistic Impression" },
  { image: "/images/highlights/highlight_7opt.webp", watermark: "Artistic Impression" },
  { image: "/images/highlights/highlight_9opt.webp", watermark: "Artistic Impression" },
  { image: "/images/highlights/highlight_10opt.webp", watermark: "Artistic Impression" }
];

const galleryGrid = document.getElementById("galleryGrid");

galleryImages.forEach((item, index) => {
  const card = document.createElement("article");
  card.className = "gallery-card";

  if (index < 3) {
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-duration", "800");
    card.setAttribute("data-aos-delay", `${index * 100}`);
    card.setAttribute("data-aos-once", "true");
  }

  card.innerHTML = `
    <div class="!relative !aspect-[4/4] !w-full !overflow-hidden !rounded-[0.2rem] !bg-black">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="${optimizedSrc(item.image)}" data-srcset="${optimizedSrcset(item.image)}" sizes="(min-width: 80rem) calc((100vw - 16.5rem) / 3), (min-width: 48rem) calc((100vw - 15.25rem) / 2), (min-width: 40rem) calc((100vw - 5.25rem) / 2), calc(100vw - 4rem)" alt="Aarize Tessoro Gallery" class="gallery-image !block !h-full !w-full !object-cover" loading="lazy" decoding="async">
      <span class="!absolute !bottom-[0.6rem] !left-[0.6rem] !z-10 !rounded-[0.3rem] !border !border-white/30 !bg-white/[0.15] !px-[0.55rem] !py-[0.3rem] !text-[0.45rem] !font-normal !leading-none !text-white !backdrop-blur-[0.5rem] sm:!bottom-[0.7rem] sm:!left-[0.7rem] sm:!px-[0.65rem] sm:!py-[0.35rem] sm:!text-[0.5rem] lg:!bottom-[0.75rem] lg:!left-[0.75rem] lg:!text-[0.5rem] xl:!text-[0.55rem]">${item.watermark}</span>
    </div>
  `;

  galleryGrid.appendChild(card);
});

// =========================================
// ZONES
// =========================================

const zones = [
  {
    image: "/images/zones/treasury2.webp",
    title: "Treasury",
    description: "Anchor & Vanilla Retail",
    floor: "Lower Ground Floor",
    locked: false
  },
  {
    image: "/images/zones/treasury.webp",
    title: "Quest",
    description: "Retail",
    floor: "Upper Ground Floor",
    locked: true
  },
  {
    image: "/images/zones/treasury.webp",
    title: "Discovery",
    description: "Retail",
    floor: "First Floor",
    locked: true
  },
  {
    image: "/images/zones/treasury.webp",
    title: "Expedition",
    description: "Kids' Zone + Gourmet",
    floor: "Second Floor",
    locked: true
  },
  {
    image: "/images/zones/treasury.webp",
    title: "Odyssey",
    description: "Superplex and Dining Hub",
    floor: "Third Floor",
    locked: true
  },
  {
    image: "/images/zones/treasury.webp",
    title: "Vault",
    description: "Club",
    floor: "Fourth Floor",
    locked: true
  }
];

const zoneGrid = document.getElementById("zoneGrid");

zones.forEach((item, index) => {
  const card = document.createElement("article");
  card.className = "!flex !w-full !flex-col";

  if (index < 3) {
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-duration", "500");
    card.setAttribute("data-aos-delay", `${index * 50}`);
    card.setAttribute("data-aos-once", "true");
  }

  card.innerHTML = `
    <div class="zone-image-wrapper !relative !aspect-[5/3] !w-full !overflow-hidden !rounded-[0.35rem] !bg-white">
      <img
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        data-src="${optimizedSrc(item.image)}"
        data-srcset="${optimizedSrcset(item.image)}"
        sizes="(min-width: 80rem) calc((100vw - 16rem) / 3), (min-width: 48rem) calc((100vw - 15.25rem) / 2), (min-width: 40rem) calc((100vw - 5.25rem) / 2), calc(100vw - 4rem)"
        alt="${item.title}"
        class="zone-image ${item.locked ? "zone-blurred-image" : ""}"
        loading="lazy"
        decoding="async"
      >
      ${item.locked ? `
        <div class="!absolute !inset-0 !z-10 !flex !items-center !justify-center">
          <a href="#contact" class="!inline-flex !items-center !justify-center !rounded-[0.2rem] !bg-rose !px-[1rem] !py-[0.55rem] !font-body !text-[0.5rem] !font-semibold !uppercase !tracking-[0.04em] !text-white !transition-opacity !duration-300 hover:!opacity-90 sm:!px-[1.15rem] sm:!py-[0.6rem] sm:!text-[0.55rem]">Enquire Now</a>
        </div>
      ` : ""}
    </div>
    <div class="!px-[0.15rem] !pt-[0.85rem] !text-center sm:!pt-[1rem]">
      <h3 class="!font-display !text-[0.95rem] !font-normal !uppercase !leading-[1.2] !text-[#222222] sm:!text-[1rem] lg:!text-[1.3rem] xl:!text-[1.3rem]">${item.title}</h3>
      <div class="!mt-[0.65rem] !flex !items-center !justify-center !gap-[0.35rem] !font-body !text-[0.42rem] !font-normal !leading-none !text-black/[0.75] sm:!text-[0.45rem] lg:!text-[0.65rem]">
        <span>${item.description}</span>
        <span class="!min-w-[2rem] !flex-1 !border-b !border-dotted !border-[#777777]"></span>
        <span>${item.floor}</span>
      </div>
    </div>
  `;

  zoneGrid.appendChild(card);
});

// =========================================
// CONSULTANTS
// =========================================

const consultants = [
  {
    logo: "/images/consultant/ARCHITECTURE-DESIGN-CONSULTANT.svg",
    title: "Architecture & Design",
    subtitle: "Consultant"
  },
  {
    logo: "/images/consultant/STRUCTURE-CONSULTANT.svg",
    title: "Structure",
    subtitle: "Consultant"
  },
  {
    logo: "/images/consultant/MEP-CONSULTANT.svg",
    title: "MEP",
    subtitle: "Consultant"
  },
  {
    logo: "/images/consultant/LANDSCAPE-CONSULTANT.svg",
    title: "Landscape",
    subtitle: "Consultant"
  },
  {
    logo: "/images/consultant/avc.svg",
    title: "Architectural Visualization",
    subtitle: "Consultant"
  }
];

const consultantGrid = document.getElementById("consultantGrid");

consultants.forEach((item, index) => {
  const card = document.createElement("article");
  card.className =
    index === 2
      ? "!flex !min-w-0 !flex-[2] !flex-col !items-center"
      : "!flex !min-w-0 !flex-1 !flex-col !items-center";

 card.innerHTML = `
  <div class="!flex !h-[5.15rem] !w-full !items-center !justify-center !overflow-hidden !rounded-[0.2rem] !border !border-[#9f9f9f] !bg-white !px-[0.55rem] !py-[0.55rem] sm:!h-[5.3rem] sm:!px-[0.7rem] lg:!h-[5rem] lg:!px-[0.75rem] xl:!h-[5.2rem] xl:!px-[1rem]">
    <img
      src="${item.logo}"
      alt="${item.title} ${item.subtitle}"
      class="!block !max-h-full !max-w-full !object-contain"
      loading="lazy"
      decoding="async"
    >
  </div>

  <div class="!mt-[0.55rem] !w-full !text-center">
    <p class="!w-full !whitespace-normal !font-body !text-[0.38rem] !font-normal !uppercase !leading-[1.3] !text-black/[0.65] sm:!text-[0.4rem] lg:!text-[0.70rem] xl:!text-[0.70rem]">
      ${item.title} ${item.subtitle}
    </p>
  </div>
`;

  consultantGrid.appendChild(card);
});

// =========================================
// ENQUIRY FORM (validation + submit to GTF lead API)
// =========================================
(() => {
  const form = document.getElementById("enquiryForm");
  if (!form) return;

  // GTF query panel (agent 5093). Fallback: GTF website API, same as other GTF sites.
  const AGENT_INFO = {
    vAgentID: "5093",
    vProject: "Aarize The Tessoro",
    vURL: window.location.origin + window.location.pathname,
    thankspageurl: window.location.origin + "/thank-you.html"
  };
  const FORM_INFO = {
    SenderControlID: "enq-name",
    SenderControlMobileID: "enq-phone",
    SenderControlEmailID: "enq-email",
    SenderControlMsgID: "enq-message",
    SenderControlCountryCodeID: "enq-country-code"
  };
  const FALLBACK_API = "https://apiv2.gtftechnologies.com/api/v1/website/submit-query";

  // jQuery + GTF queryform are only needed for submitting, so they load on the
  // visitor's first interaction instead of competing with the initial page load.
  const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });

  let queryFormReady = null;
  const loadQueryForm = () => {
    if (!queryFormReady) {
      // queryform.min.ssl.js reads the global AgentInfo when it loads
      window.AgentInfo = AGENT_INFO;
      queryFormReady = (window.jQuery ? Promise.resolve() : loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"))
        .then(() => loadScript(`https://api2.gtftech.com/scripts/queryform.min.ssl.js?v=${Date.now()}`))
        .then(() => typeof window.SubmitQueryData === "function");
      queryFormReady.catch(() => {});
    }
    console.log("Query form loading initiated.");
    return queryFormReady;
    
  };

  ["pointerdown", "touchstart", "keydown", "wheel"].forEach((type) => {
    window.addEventListener(type, loadQueryForm, { once: true, passive: true });
  });
  form.addEventListener("focusin", loadQueryForm, { once: true });
  if ("IntersectionObserver" in window) {
    const nearForm = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        loadQueryForm();
        nearForm.disconnect();
      }
    }, { rootMargin: "600px 0px" });
    nearForm.observe(form);
  }

  const fields = {
    name: form.querySelector("#enq-name"),
    phone: form.querySelector("#enq-phone"),
    email: form.querySelector("#enq-email"),
    message: form.querySelector("#enq-message")
  };

 

  const honeypot = form.querySelector("#enq-company");
  const submitButton = form.querySelector('button[type="submit"]');
  const status = document.getElementById("enquiryStatus");

  const isFakePhone = (digits) => {
    // One block repeated: 9999999999, 9898989898, 9876598765
    if (/^(\d)\1+$/.test(digits) || /^(\d{2})\1{4}$/.test(digits) || /^(\d{5})\1$/.test(digits)) return true;
    // Six or more of the same digit in a row: 9000000012
    if (/(\d)\1{5,}/.test(digits)) return true;
    // Any single digit used 7+ times: 9199919991
    const counts = {};
    for (const d of digits) counts[d] = (counts[d] || 0) + 1;
    if (Object.values(counts).some((n) => n >= 7)) return true;
    // Runs of 7+ sequential digits: 9876543210, 8123456789
    for (let i = 0; i + 7 <= digits.length; i++) {
      const run = digits.slice(i, i + 7);
      if ("01234567890123456789".includes(run) || "98765432109876543210".includes(run)) return true;
    }
    return false;
  };

  const validators = {
    name: (value) => {
      const v = value.trim().replace(/\s+/g, " ");
      if (!v) return "Please enter your name.";
      if (!/^[A-Za-z][A-Za-z .'-]*$/.test(v)) return "Name can contain letters, spaces, dots, hyphens and apostrophes only.";
      if (v.replace(/[^A-Za-z]/g, "").length < 2) return "Please enter at least 2 letters.";
      if (v.length > 50) return "Name must be 50 characters or fewer.";
      if (/([A-Za-z])\1{2,}/i.test(v)) return "Please enter a valid name.";
      return "";
    },
    phone: (value) => {
      const digits = value.replace(/\D/g, "");
      if (!digits) return "Please enter your phone number.";
      if (digits.length !== 10) return "Phone number must be exactly 10 digits.";
      if (!/^[6-9]/.test(digits)) return "Indian mobile numbers start with 6, 7, 8 or 9.";
      if (isFakePhone(digits)) return "Please enter a valid mobile number.";
      return "";
    },
    email: (value) => {
      const v = value.trim();
      if (!v) return "Please enter your email address.";
      if (
        v.length > 100 ||
        !/^[A-Za-z0-9](?:[A-Za-z0-9._%+-]*[A-Za-z0-9])?@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/.test(v) ||
        /\.\./.test(v)
      ) return "Please enter a valid email address.";
      return "";
    },
    message: (value) => {
      const v = value.trim();
      if (!v) return "Please enter a message.";
      if (v.length < 10) return "Message must be at least 10 characters.";
      if (v.length > 500) return "Message must be 500 characters or fewer.";
      if ((v.match(/[A-Za-z]/g) || []).length < 3) return "Please enter a meaningful message.";
      if (/(.)\1{5,}/.test(v)) return "Please enter a meaningful message.";
      return "";
    }
  };

  const showError = (key, message) => {
    const input = fields[key];
    const error = document.getElementById(`${input.id}-error`);
    input.setAttribute("aria-invalid", message ? "true" : "false");
    error.textContent = message;
    error.hidden = !message;
  };

  const validate = (key) => {
    const message = validators[key](fields[key].value);
    showError(key, message);
    return !message;
  };

  const setStatus = (message, isError) => {
    status.textContent = message;
    status.hidden = !message;
    status.style.color = isError ? "#B3261E" : "#1B6E3A";
  };

  // Phone: digits only, drop a pasted +91 / 0 prefix, max 10 digits
  fields.phone.addEventListener("input", () => {
    let digits = fields.phone.value.replace(/\D/g, "");
    if (digits.length > 10 && digits.startsWith("91")) digits = digits.slice(2);
    if (digits.length > 10 && digits.startsWith("0")) digits = digits.slice(1);
    fields.phone.value = digits.slice(0, 10);
  });

  // Name: block digits and symbols while typing
  fields.name.addEventListener("input", () => {
    const cleaned = fields.name.value.replace(/[^A-Za-z .'-]/g, "");
    if (cleaned !== fields.name.value) fields.name.value = cleaned;
  });

  Object.keys(fields).forEach((key) => {
    fields[key].addEventListener("blur", () => {
      if (fields[key].value.trim()) validate(key);
    });
    fields[key].addEventListener("input", () => {
      if (fields[key].getAttribute("aria-invalid") === "true") validate(key);
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault(0);
    setStatus("", false);

    const results = Object.keys(fields).map((key) => [key, validate(key)]);
    const firstInvalid = results.find(([, ok]) => !ok);
    if (firstInvalid) {
      fields[firstInvalid[0]].focus();
      return;
    }

    // Bots fill the hidden field; pretend success and send nothing
    if (honeypot.value) {
      form.reset();
      setStatus("Thank you! Our team will get in touch with you shortly.", false);
      return;
    }

    // GTF reads values straight from the inputs, so store the cleaned-up versions
    fields.name.value = fields.name.value.trim().replace(/\s+/g, " ");
    fields.email.value = fields.email.value.trim();
    fields.message.value = fields.message.value.trim();
    fields.phone.value = fields.phone.value.replace(/\D/g, "");

    const originalText = submitButton.textContent;
    const restoreButton = () => {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    };
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    const gtfAvailable = await loadQueryForm().catch(() => false);

    if (gtfAvailable) {
      // Sends the lead to agent 5093 and redirects to thank-you.html on success
      const accepted = window.SubmitQueryData(AGENT_INFO, FORM_INFO);
      if (accepted === false) {
        restoreButton();
        setStatus("Please check your details and try again.", true);
        return;
      }
      // If no redirect happens (network problem), let the visitor know
      setTimeout(() => {
        restoreButton();
        setStatus("Sorry, we couldn't confirm your enquiry. Please try again or call +91 9464700700.", true);
      }, 15000);
      return;
    }

    try {
      const response = await fetch(FALLBACK_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name.value,
          mobile: `+91${fields.phone.value}`,
          email: fields.email.value,
          message: fields.message.value,
          subject: "New inquiry received on Aarize The Tessoro website",
          lookingfor: "Enquiry from Aarize The Tessoro Website",
          vAgentID: AGENT_INFO.vAgentID
        })
      });

      if (!response.ok) throw new Error(`Request failed (${response.status})`);
      window.location.href = AGENT_INFO.thankspageurl;
    } catch (error) {
      restoreButton();
      setStatus("Sorry, we couldn't send your enquiry. Please try again or call +91 9464700700.", true);
    }
  });
})();

// =========================================
// LAZY LOADING (images + walkthrough video)
// Starts loading shortly before an element scrolls into view, so nothing
// below the fold competes with the hero banner during the initial load.
// =========================================
(() => {
  const targets = document.querySelectorAll("img[data-src], iframe[data-src]");

  const load = (el) => {
    if (el.dataset.srcset) {
      el.srcset = el.dataset.srcset;
      el.removeAttribute("data-srcset");
    }
    el.src = el.dataset.src;
    el.removeAttribute("data-src");
  };

  if (!("IntersectionObserver" in window)) {
    targets.forEach(load);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        load(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "400px 0px" });

  targets.forEach((el) => observer.observe(el));
})();

// =========================================
// AOS INITIALIZATION
// =========================================

AOS.init({
  duration: 1000,
  once: true,
  offset: 50,
  easing: 'ease-in-out',
});