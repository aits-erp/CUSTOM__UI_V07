(() => {
    // Prevent multiple observer creation
    if (window.__miniNavObserverAdded) return;
    window.__miniNavObserverAdded = true;

  console.log("[custom] desk_home_override loaded");

  // ==========================
  // Redirect to Accounts Dashboard on first load
  // ==========================
  const redirectToAccountsDashboard = () => {
    if (window.location.pathname === "/app" || window.location.pathname === "/app/home") {
      console.log("[custom] redirecting to /app/dashboard-view/Accounts");
      frappe.set_route("dashboard-view", "Accounts");
    }
  };

  const waitForFrappe = () => {
    if (typeof frappe !== "undefined" && frappe.set_route) {
      redirectToAccountsDashboard();
    } else {
      setTimeout(waitForFrappe, 300);
    }
  };

  if (document.readyState === "complete") {
    waitForFrappe();
  } else {
    window.addEventListener("load", waitForFrappe);
  }

  // ==========================
  // Create Global MiniNav + Dashboard
  // ==========================

  const createGlobalUI = () => {
    if (document.querySelector("#custom-global-navbar")) return;
    if (document.getElementById("sliding-dashboard")) return; // prevent duplicates

    // Dashboard container
    const dashboardContainer = document.createElement("div");
    dashboardContainer.id = "sliding-dashboard";
    dashboardContainer.style.position = "fixed";
    dashboardContainer.style.padding = "20px";
    dashboardContainer.style.top = "8%";
    dashboardContainer.style.left = "100%"; // visible on load
    dashboardContainer.style.width = "100%";
    dashboardContainer.style.height = "100%";
    dashboardContainer.style.background = "#fdf4deff";
    dashboardContainer.style.transition = "left 0.5s ease";
    dashboardContainer.style.zIndex = "9998";
    dashboardContainer.style.overflowY = "auto";
    document.body.appendChild(dashboardContainer);

    // Insert dashboard cards
    dashboardContainer.innerHTML = `
        <style>

@keyframes zoomInUp {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(-30px);
  }
  60% {
    opacity: 1;
    transform: scale(1.05) translateY(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes zoomOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}

.nova-animate-in {
  animation: zoomInUp 0.4s ease forwards;
}

.nova-animate-out {
  animation: zoomOut 0.3s ease forwards;
}
   #main-grid {
      margin-inline: 100px;
    }

          .nova-grid {
            padding: 15px;
            display: grid;
            top: 100%;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 15px;
            justify-items: center;
            color: black;
            background-color: #f5e3b9ff;
            border-radius: 10px;
            margin: 20px;
          }
          .nova-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            cursor: pointer;
          }
          .nova-icon {
            width: 80px;
            height: 80px;
            border-radius: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            box-shadow: 0 3px 6px rgba(0,0,0,0.15);
            font-size: 28px;
            color: white;
            font-weight: bold;
            background: gray;
          }
          .nova-icon:hover {
            transform: scale(1.1);
            transition: transform 0.2s;
            box-shadow: 0 6px 12px rgba(0,0,0,0.25);
          }
          .nova-icon img {
            border-radius: 20%;
            width: 50px;
            height: 50px;
            object-fit: contain;
          }

          .c-yellow { background: #f1c40f; }
          .c-green { background: #27ae60; }
          .c-red { background: #e74c3c; }
          .c-orange { background: #e67e22; }
          .c-blue { background: #3498db; }
          .c-purple { background: #9b59b6; }
          .c-brown { background: #a0522d; }
          .c-grey { background: #7f8c8d; }
          .c-pink { background: #ff6b81; }
          .c-teal { background: #16a085; }
        </style>

        <div class="nova-grid" id="main-grid" nova-animate-in>
          <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Total%20Outstanding%20Amount%20Of%20Distributors%20Group%2060')">
        <div class="nova-icon c-yellow"><img src="/assets/custom_ui_v6/images/D2.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Total Outstanding Amount Of Distributors Group 60</div>
    </div>
    
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Product%20Ageing%20over%20180%20Days')">
        <div class="nova-icon c-orange"><img src="/assets/custom_ui_v6/images/time.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Product Ageing over 180 Days</div>
    </div>
    
    <div class="nova-card" onclick="frappe.set_route('app/dashboard/Outstanding%20Debtors%20Monthwise')">
        <div class="nova-icon c-blue"><img src="/assets/custom_ui_v6/images/debt.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Outstanding Debtors Monthwise</div>
    </div>

    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Top%2050%20selling%20items')">
        <div class="nova-icon c-green"><img src="/assets/custom_ui_v6/images/economy.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Top 50 selling items</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Bottom%2050%20Selling%20Item')">
        <div class="nova-icon c-red"><img src="/assets/custom_ui_v6/images/bottom-selling.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Bottom 50 selling items</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Accounts')">
        <div class="nova-icon c-brown"><img src="/assets/custom_ui_v6/images/creditor.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Accounts Dashboard</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Stock')">
        <div class="nova-icon c-orange"><img src="/assets/custom_ui_v6/images/saleinvoice.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Stock Dashboard</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Selling')">
        <div class="nova-icon c-pink"><img src="/assets/custom_ui_v6/images/selling-dashboard.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Selling Dashboard</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Buying')">
        <div class="nova-icon c-grey"><img src="/assets/custom_ui_v6/images/buying-dashboard.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Buying Dashboard</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Manufacturing')">
        <div class="nova-icon c-red"><img src="/assets/custom_ui_v6/images/manufacturing.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Manufacturing Dashboard</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/CRM')">
        <div class="nova-icon c-pink"><img src="/assets/custom_ui_v6/images/crm dashboard.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>CRM Dashboard</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Project')">
        <div class="nova-icon c-purple"><img src="/assets/custom_ui_v6/images/projects-dashboard.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Project Dashboard</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Asset')">
        <div class="nova-icon c-yellow"><img src="/assets/custom_ui_v6/images/item.png" style="width:100px; height:100px; object-fit: contain;" /></div><div>Assets Dashboard</div>
    </div>

    </div>
  </div>
</div>
          
      `;

      const EXTRA_STYLE = `
<style id="nova-ui-custom-style">

.minnav-btn { width: 150px; padding: 6px 12px; border: none; border-radius: 6px; cursor: pointer; background-color: rgb(255, 205, 79); color: #880000ff; font-size: 13px; font-weight: 500; transition: all 0.3s ease; }
  
  .minnav-btn:hover { background-color: rgb(255, 205, 79); transform: translateY(-2px); }
  
  .minnav-dropdown { position: absolute; background: #fff4dfff; top: 100%; left: 0; border: 1px solid #ccc; border-radius: 6px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: none; min-width: 200px; z-index: 999 !important;}
  
  .minnav-subitem { padding: 8px 12px; font-size: 13px; cursor: pointer; }
  
  .minnav-subitem:hover { background: rgb(255, 205, 79); color: rgba(119, 40, 0, 1); }

.dashboard-btn {
    position: fixed;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px 14px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background-color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    z-index: 9;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    transition: background 0.3s ease, transform 0.2s ease;
  }
  .dashboard-btn:hover {
    background-color: rgb(255, 205, 79);
    transform: translateY(-50%) scale(1.1);
  }
  #sliding-dashboard {
    position: absolute;
    top: 20%;
    left: 0; /* visible on load */
    width: 100%;
    height: 100%;
    transition: left 0.5s ease;
    z-index: 5;
    overflow-y: auto;
  }
</style>
`;


    // Dashboard toggle button (always visible)
    let dashboardVisible = false;
    const rightBtn = document.createElement("button");
    rightBtn.innerHTML = "<img src='/assets/custom_ui_v6/images/apps-button.png' style='width:30px;height:35px;object-fit:contain;' />";
    rightBtn.className = "dashboard-btn-global";
    rightBtn.style.position = "fixed";
    rightBtn.style.right = "10px";
    rightBtn.style.top = "50%";
    rightBtn.style.transform = "translateY(-50%)";
    rightBtn.style.padding = "10px 14px";
    rightBtn.style.border = "none";
    rightBtn.style.borderRadius = "50%";
    rightBtn.style.cursor = "pointer";
    rightBtn.style.backgroundColor = "#ffffff";
    rightBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    rightBtn.style.zIndex = "9999";


    rightBtn.onclick = () => {
      dashboardContainer.style.left = dashboardVisible ? "100%" : "0%";
      dashboardVisible = !dashboardVisible;
    };
dashboardContainer.addEventListener("click", (e) => {
  const card = e.target.closest(".nova-card");
  if (card) {
    // slide out the dashboard
    dashboardContainer.style.left = "100%";
    dashboardVisible = false;
  }
});

    document.body.appendChild(rightBtn);
  };

  // ==========================
  // MiniNav creation function
  // ==========================
function createMiniNav() {
    // const pageHead = document.querySelector(".page-head");
    // if (!pageHead) return;

    // const leftContainer =
    //   pageHead.querySelector(".page-title") ||
    //   pageHead.querySelector(".breadcrumb-area") ||
    //   pageHead;

    const leftContainer = document.body;  // attach globally

    // remove previous if present (clean re-run)
        if (leftContainer.querySelector(".page-head-minnav-nova-outer")) return;
if (document.querySelector(".page-head-minnav-nova-outer")) return;

    // configuration
    const VISIBLE_COUNT = 3;     // number of modules to always   
    const GAP = 12;              // gap between modules (px)

    // container
    const miniNavOuter = document.createElement("div");
    miniNavOuter.className = "page-head-minnav-nova-outer";
    // miniNavOuter.style.display = "flex";
    // miniNavOuter.style.alignItems = "center";
    // miniNavOuter.style.position = "relative";
    miniNavOuter.style.marginLeft = "270px";
    miniNavOuter.style.marginTop = "60px";
    // miniNavOuter.style.zIndex = "9998";
    miniNavOuter.style.display = "flex";
    miniNavOuter.style.alignItems = "center";
    miniNavOuter.style.position = "fixed";  // make it fixed
    miniNavOuter.style.top = "0";           // stick to top
    miniNavOuter.style.left = "0";          // stick to left
    miniNavOuter.style.width = "20%";      // full width
    miniNavOuter.style.padding = "6px 20px"; // optional padding
    miniNavOuter.style.background = "#fff4dfff"; // background to avoid overlap
    miniNavOuter.style.zIndex = "998";     // above other elements
    boxShadow = "0 2px 6px rgba(0,0,0,0.1)"; // optional shadow


    const miniNav = document.createElement("div");
    miniNav.className = "page-head-minnav-nova";
    miniNav.style.display = "flex";
    miniNav.style.position = "fixed";
    miniNav.style.gap = GAP + "px";
    miniNav.style.alignItems = "center";
    miniNav.style.overflow = "hidden"; // hide overflow, we will scroll
    miniNav.style.scrollBehavior = "smooth";
    miniNav.style.whiteSpace = "nowrap";
    miniNav.style.padding = "6px 6px";
    miniNav.style.position = "relative";

    // modules definition (unchanged)
    const modules = [
      {
        name: "Selling",
        submenu: [
          { name: "📜 Quotations", route: "app/quotation" },
          { name: "📦 Delivery Note", route: "app/delivery-note" },
          { name: "🧾 Sales Invoice", route: "app/sales-invoice" },
          { name: "👤 Customer", route: "app/customer" },
          { name: "📋 Item", route: "app/item" },
          { name: "🧾 Sales Order", route: "app/sales-order" },
        ],
      },
      {
        name: "Buying",
        submenu: [
          { name: "📜 Purchase Invoice", route: "app/purchase-invoice" },
          { name: "📦 Purchase Receipt", route: "app/purchase-receipt" },
          { name: "📋 Item", route: "app/item" },
        ],
      },
      {
        name: "Stock",
        submenu: [
          { name: "📥 Payment", route: "app/payment-entry" },
          { name: "📦 Stock Entry", route: "app/stock-entry" },
          { name: "📘 Item Group", route: "app/item-group" },
          { name: "📋 Item", route: "app/item" },
        ],
      },
      {
        name: "HR",
        submenu: [
          { name: "🏢 Employee", route: "app/employee" },
          { name: "💵 Salary Component", route: "app/salary-component" },
          { name: "📅 Attendance", route: "app/attendance" },
        ],
      },
      {
        name: "Manufacturing",
        submenu: [
          { name: "📦 Bill of Materials", route: "app/bill-of-materials" },
          { name: "📋 Work Order", route: "app/work-order" },
        ],
      },
      {
        name: "CRM",
        submenu: [
          { name: "📋 Leads", route: "app/lead" },
          { name: "📋 Opportunities", route: "app/opportunity" },
        ],
      },
      {
        name: "Projects",
        submenu: [
          { name: "📋 Project", route: "app/project" },
          { name: "📋 Task", route: "app/task" },
        ],
      },
    ];

    // create items
    modules.forEach((mod) => {
      const wrapper = document.createElement("div");
      wrapper.className = "minnav-item-nova";
      wrapper.style.display = "inline-block";
      wrapper.style.position = "relative";

      const btn = document.createElement("button");
      btn.innerText = mod.name;
      btn.className = "minnav-btn-nova";
      btn.type = "button";
      btn.style.boxSizing = "border-box";
      btn.style.whiteSpace = "nowrap";

      // create dropdown element (positioned fixed when opened)
      const dropdown = document.createElement("div");
      dropdown.className = "minnav-dropdown-nova";
      dropdown.style.display = "none";
      dropdown.style.position = "fixed"; // IMPORTANT: fixed so it's outside scroll container
      dropdown.style.zIndex = "99999";
      dropdown.style.minWidth = "220px";
      dropdown.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
      dropdown.style.background = "#fff4dfff";
      dropdown.style.border = "1px solid #e0cfa3";
      dropdown.style.borderRadius = "6px";

      // fill submenu
      (mod.submenu || []).forEach((sub) => {
        const item = document.createElement("div");
        item.className = "minnav-subitem-nova";
        item.style.padding = "8px 12px";
        item.style.cursor = "pointer";
        item.style.whiteSpace = "nowrap";
        item.innerText = sub.name;
        item.onclick = (ev) => {
          ev.stopPropagation();
          dropdown.style.display = "none";
          try { frappe.set_route(sub.route); } catch (err) { console.error(err); }
        };
        dropdown.appendChild(item);
      });

      // helper to open dropdown and place it outside scroll
      const openDropdownAtBtn = () => {
        // close other open dropdowns
        document.querySelectorAll(".minnav-dropdown-nova").forEach(d => {
          if (d !== dropdown) d.style.display = "none";
        });

        const rect = btn.getBoundingClientRect();
        // show first to get width if not yet measured
        dropdown.style.display = "block";
        dropdown.style.top = (rect.bottom + 6) + "px";
        // align left but keep inside viewport
        const left = Math.min(rect.left, window.innerWidth - dropdown.offsetWidth - 8);
        dropdown.style.left = Math.max(8, left) + "px";
      };

      // hover and click events
      let hoverTimeout;
      wrapper.addEventListener("mouseenter", () => {
        clearTimeout(hoverTimeout);
        openDropdownAtBtn();
      });
      wrapper.addEventListener("mouseleave", () => {
        hoverTimeout = setTimeout(() => {
          dropdown.style.display = "none";
        }, 150);
      });

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (dropdown.style.display === "block") {
          dropdown.style.display = "none";
        } else {
          openDropdownAtBtn();
        }
      });

      document.addEventListener("click", () => {
        dropdown.style.display = "none";
      });

      wrapper.appendChild(btn);
      wrapper.appendChild(dropdown);
      miniNav.appendChild(wrapper);
      // miniNav.appendChild(div);
    });

    // left/right scroll buttons
    const leftBtn = document.createElement("button");
    leftBtn.className = "minnav-scroll-left";
    leftBtn.innerText = "◀";
    leftBtn.title = "Scroll left";
    leftBtn.style.border = "none";
    leftBtn.style.background = "transparent";
    leftBtn.style.cursor = "pointer";
    leftBtn.style.fontSize = "18px";
    leftBtn.style.padding = "6px 10px";
    leftBtn.style.marginRight = "6px";
    leftBtn.style.userSelect = "none";

    const rightBtn = document.createElement("button");
    rightBtn.className = "minnav-scroll-right";
    rightBtn.innerText = "▶";
    rightBtn.title = "Scroll right";
    rightBtn.style.border = "none";
    rightBtn.style.background = "transparent";
    rightBtn.style.cursor = "pointer";
    rightBtn.style.fontSize = "18px";
    rightBtn.style.padding = "6px 10px";
    rightBtn.style.marginLeft = "6px";
    rightBtn.style.userSelect = "none";

    // wrapper assembly
    miniNavOuter.appendChild(leftBtn);
    miniNavOuter.appendChild(miniNav);
    miniNavOuter.appendChild(rightBtn);

      leftContainer.appendChild(miniNavOuter);


    // inject CSS once
    if (!document.getElementById("minnav-nova-style")) {
      const style = document.createElement("style");
      style.id = "minnav-nova-style";
      style.innerHTML = `
        .page-head-minnav-nova-outer {
        position: relative;
      }
      .page-head-minnav-nova::-webkit-scrollbar { display: none; }
      .minnav-btn-nova {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 8px 14px;
        border-radius: 8px;
        border: none;
        background: rgb(255,205,79);
        color: #3d1f00;
        font-weight: 600;
        cursor: pointer;
      }
      .minnav-btn-nova:hover { transform: translateY(-2px); }
      .minnav-subitem-nova:hover { background: rgb(255,205,79); color: rgba(119,40,0,1); }
      .minnav-scroll-left[disabled], .minnav-scroll-right[disabled] {
        opacity: 0.35; cursor: default;
      }
      `;
      document.head.appendChild(style);
    }

    // ---------- Dynamic sizing & scrolling logic ----------
    function recomputeSizes() {
      // calculate module width so exactly VISIBLE_COUNT modules fit into leftContainer
      const containerWidth = leftContainer.clientWidth || window.innerWidth;
      // reserve small space (20px) for margins/padding so it doesn't overflow parent
      const reserved = 20;
      const available = Math.max(240, containerWidth - reserved); // at least something sensible
      const moduleWidth = Math.floor((available - GAP * (VISIBLE_COUNT - 1)) / VISIBLE_COUNT);

      // set each button width
      miniNav.querySelectorAll(".minnav-btn-nova").forEach((b) => {
        //b.style.minWidth = moduleWidth + "px";
        b.style.minWidth = "70px";
        //b.style.maxWidth = moduleWidth + "px";
        b.style.maxWidth = "100px";
        b.style.overflow = "hidden";
        b.style.textOverflow = "ellipsis";
      });

      // set visible width of the scrolling area to exactly hold VISIBLE_COUNT modules
      const totalVisibleWidth = moduleWidth * VISIBLE_COUNT + GAP * (VISIBLE_COUNT - 1);
      miniNav.style.width = totalVisibleWidth + "px";
      miniNav.style.maxWidth = totalVisibleWidth + "px";
      miniNav.style.flex = "0 0 " + totalVisibleWidth + "px";

      updateScrollButtons();
    }

    // scroll by one module
    function scrollByModule(dir = 1) {
      const firstBtn = miniNav.querySelector(".minnav-btn-nova");
      if (!firstBtn) return;
      const moduleWidth = firstBtn.getBoundingClientRect().width;
      const scrollAmount = moduleWidth + GAP;
      miniNav.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
      // after a small delay update button states
      setTimeout(updateScrollButtons, 220);
    }

    function updateScrollButtons() {
      // disable left if at leftmost, disable right if at rightmost
      const maxScrollLeft = miniNav.scrollWidth - miniNav.clientWidth;
      const current = miniNav.scrollLeft;
      if (current <= 2) {
        leftBtn.setAttribute("disabled", "true");
      } else {
        leftBtn.removeAttribute("disabled");
      }
      if (current >= maxScrollLeft - 2) {
        rightBtn.setAttribute("disabled", "true");
      } else {
        rightBtn.removeAttribute("disabled");
      }
    }

    // wheel -> horizontal scroll
    miniNav.addEventListener("wheel", (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        miniNav.scrollLeft += e.deltaY;
        // update state
        updateScrollButtons();
      }
    }, { passive: false });

    leftBtn.addEventListener("click", (e) => {
      if (leftBtn.hasAttribute("disabled")) return;
      scrollByModule(-1);
    });
    rightBtn.addEventListener("click", (e) => {
      if (rightBtn.hasAttribute("disabled")) return;
      scrollByModule(1);
    });

    // update buttons on manual scroll
    miniNav.addEventListener("scroll", () => {
      // throttle small
      if (this._minnav_scroll_timer) clearTimeout(this._minnav_scroll_timer);
      this._minnav_scroll_timer = setTimeout(updateScrollButtons, 80);
    });

    // recompute on resize and when leftContainer size changes
    const resizeObserver = new ResizeObserver(() => {
      recomputeSizes();
    });
    resizeObserver.observe(leftContainer);

    // initial compute (deferred a tick so DOM elements are measurable)
    setTimeout(() => {
      recomputeSizes();
      // ensure buttons initial state
      updateScrollButtons();
    }, 50);
  }

  

  // Run once
  // ==========================
// Run immediately when frappe is ready
// ==========================
// ==========================
// Run once
// ==========================
// ==========================
// Initialize both Dashboard + MiniNav together
// ==========================
const initUI = () => {
  console.log("[custom] Initializing Global Dashboard + MiniNav ✅");
  createGlobalUI();

  // Try to create MiniNav as soon as .page-head is available
  const tryCreateMiniNav = () => {
  // Use .page-head if present, otherwise fallback to body
  const pageHead = document.querySelector(".page-head") || document.body;
  
  if (!pageHead.querySelector(".page-head-minnav-nova-outer")) {
    console.log("[custom] Creating MiniNav on page ✅");
    createMiniNav(pageHead); // pass pageHead as container
  }

  // keep retrying until it works
  setTimeout(tryCreateMiniNav, 300);
};


  tryCreateMiniNav();
};

// ==========================
// Wait for frappe & DOM to be ready, then initUI()
// ==========================
const waitForFrappeReady = () => {
  if (typeof frappe !== "undefined" && frappe.set_route) {
    initUI();
  } else {
    setTimeout(waitForFrappeReady, 300);
  }
};

if (document.readyState === "complete") {
  waitForFrappeReady();
} else {
  window.addEventListener("load", waitForFrappeReady);
}

// ==========================
// Keep MiniNav alive across route changes
// ==========================
// let lastRun = 0;
// const observer = new MutationObserver(() => {
//   const now = Date.now();
//   if (now - lastRun > 1000) {
//     const pageHead = document.querySelector(".page-head");
//     if (pageHead && !pageHead.querySelector(".page-head-minnav-nova-outer")) {
//       console.log("[custom] MutationObserver → recreate MiniNav");
//       createMiniNav();
//     }
//     lastRun = now;
//   }
// });
// observer.observe(document.body, { childList: true, subtree: true });



// Recreate MiniNav on route change
if (window.frappe && frappe.router) {
  frappe.router.on("change", () => {
    setTimeout(() => {
      console.log("[custom] Route change → recreate MiniNav");
      createMiniNav();
    }, 600);
  });
}

// ---------------------------
    // Observer to inject navbar on every page
    // ---------------------------
    var observer = new MutationObserver(function() {
        if (!document.querySelector(".page-head-minnav-nova-outer") && document.querySelector(".page-head")) {
            createMiniNav();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial call
    createMiniNav();
})();

