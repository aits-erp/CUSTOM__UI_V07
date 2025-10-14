(() => {
  // ../custom_ui_v7/custom_ui_v7/public/js/desk_home_override.js
  (() => {
    if (window.__miniNavObserverAdded)
      return;
    window.__miniNavObserverAdded = true;
    console.log("[custom] desk_home_override loaded");
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
    const createGlobalUI = () => {
      if (document.querySelector("#custom-global-navbar"))
        return;
      if (document.getElementById("sliding-dashboard"))
        return;
      const dashboardContainer = document.createElement("div");
      dashboardContainer.id = "sliding-dashboard";
      dashboardContainer.style.position = "fixed";
      dashboardContainer.style.padding = "20px";
      dashboardContainer.style.top = "8%";
      dashboardContainer.style.left = "100%";
      dashboardContainer.style.width = "100%";
      dashboardContainer.style.height = "100%";
      dashboardContainer.style.background = "#fdf4deff";
      dashboardContainer.style.transition = "left 0.5s ease";
      dashboardContainer.style.zIndex = "9998";
      dashboardContainer.style.overflowY = "auto";
      document.body.appendChild(dashboardContainer);
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
        <div class="nova-icon c-green"><img src="/assets/custom_ui_v6/images/economy.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Top 50\xA0selling\xA0items</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Bottom%2050%20Selling%20Item')">
        <div class="nova-icon c-red"><img src="/assets/custom_ui_v6/images/bottom-selling.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Bottom 50\xA0selling\xA0items</div>
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
          dashboardContainer.style.left = "100%";
          dashboardVisible = false;
        }
      });
      document.body.appendChild(rightBtn);
    };
    const createMiniNav = (section, pageHead) => {
      if (!pageHead)
        return;
      const leftContainer = pageHead.querySelector(".page-title") || pageHead.querySelector(".breadcrumb-area") || pageHead;
      if (leftContainer.querySelector(".page-head-minnav"))
        return;
      const miniNav = document.createElement("div");
      miniNav.className = "page-head-minnav";
      miniNav.style.display = "flex";
      miniNav.style.gap = "12px";
      miniNav.style.alignItems = "center";
      miniNav.style.marginLeft = "20px";
      miniNav.style.width = "100%";
      let dashboardContainer = document.getElementById("sliding-dashboard");
      if (!dashboardContainer) {
        dashboardContainer = document.createElement("div");
        dashboardContainer.id = "sliding-dashboard";
        dashboardContainer.style.position = "absolute";
        dashboardContainer.style.top = "0";
        dashboardContainer.style.width = "105%";
        dashboardContainer.style.height = "100%";
        dashboardContainer.style.margin = "0 -265px";
        dashboardContainer.style.backgroundColor = "#fdf4deff";
        dashboardContainer.style.transition = "left 0.4s ease";
        dashboardContainer.style.zIndex = "1";
        section.style.position = "relative";
        section.appendChild(dashboardContainer);
      }
      const modules = [
        {
          name: "Selling",
          submenu: [
            { name: "\u{1F4DC} Quotations", route: "app/quotation" },
            { name: "\u{1F4E6} Delivery Note", route: "app/delivery-note" },
            { name: "\u{1F9FE} Sales Invoice", route: "app/sales-invoice" },
            { name: "\u{1F464} Customer", route: "app/customer" },
            { name: "\u{1F4CB} Item", route: "app/item" },
            { name: "\u{1F9FE} Sales Order", route: "app/sales-order" }
          ]
        },
        {
          name: "Buying",
          submenu: [
            { name: "\u{1F4DC} Purchase Invoice", route: "app/purchase-invoice" },
            { name: "\u{1F4E6} Purchase Receipt", route: "app/purchase-receipt" },
            { name: "\u{1F4CB} Item", route: "app/item" },
            { name: "\u{1F9FE} Purchase Order", route: "app/purchase-order" }
          ]
        },
        {
          name: "Stock",
          submenu: [
            { name: "\u{1F4E5} Payment", route: "app/payment-entry" },
            { name: "\u{1F4E6} Stock Entry", route: "app/stock-entry" },
            { name: "\u{1F4E6} Delivery Note", route: "app/delivery-note" },
            { name: "\u{1F4D8} Item Group", route: "app/item-group" },
            { name: "\u{1F4CB} Item", route: "app/item" }
          ]
        },
        {
          name: "HR",
          submenu: [
            { name: "\u{1F3E2} Employee", route: "app/employee" },
            { name: "\u{1F4B5} Salary Component", route: "app/salary-component" },
            { name: "\u{1F4E5} Salary Structure", route: "app/salary-structure" },
            { name: "\u{1F4D8} Salary Structure Assignment", route: "app/salary-structure-assignment" },
            { name: "\u{1F4C5} Attendance", route: "app/attendance" },
            { name: "\u{1F4D1} Payroll", route: "app/payroll" },
            { name: "\u{1F4C4} Salary Slip", route: "app/salary-slip" }
          ]
        },
        {
          name: "Manufacturing",
          submenu: [
            { name: "\u{1F4E6} Bill of Materials", route: "app/bill-of-materials" },
            { name: "\u{1F4CB} Work Order", route: "app/work-order" },
            { name: "\u{1F6E0}\uFE0F Job Card", route: "app/job-card" }
          ]
        },
        {
          name: "CRM",
          submenu: [
            { name: "\u{1F4CB} Leads", route: "app/lead" },
            { name: "\u{1F4CB} Opportunities", route: "app/opportunity" },
            { name: "\u{1F464} Customers", route: "app/customer" }
          ]
        },
        {
          name: "Projects",
          submenu: [
            { name: "\u{1F4CB} Project", route: "app/project" },
            { name: "\u{1F4CB} Task", route: "app/task" },
            { name: "\u{1F464} Customers", route: "app/customer" }
          ]
        }
      ];
      modules.forEach((mod) => {
        const wrapper = document.createElement("div");
        wrapper.className = "minnav-item";
        wrapper.style.position = "relative";
        const btn = document.createElement("button");
        btn.innerText = mod.name;
        btn.className = "minnav-btn";
        const dropdown = document.createElement("div");
        dropdown.className = "minnav-dropdown";
        const buildSubmenu = (submenu, parent) => {
          submenu.forEach((sub) => {
            const item = document.createElement("div");
            item.innerHTML = sub.name;
            item.className = "minnav-subitem";
            if (sub.submenu) {
              const nested = document.createElement("div");
              nested.className = "minnav-nested";
              buildSubmenu(sub.submenu, nested);
              item.appendChild(nested);
              item.onmouseenter = () => nested.style.display = "block";
              item.onmouseleave = () => nested.style.display = "none";
              if (sub.route) {
                item.onclick = (e) => {
                  e.stopPropagation();
                  frappe.set_route(sub.route);
                };
              }
            } else {
              item.onclick = () => frappe.set_route(sub.route);
            }
            parent.appendChild(item);
          });
        };
        buildSubmenu(mod.submenu, dropdown);
        wrapper.appendChild(btn);
        wrapper.appendChild(dropdown);
        wrapper.onmouseenter = () => dropdown.style.display = "block";
        wrapper.onmouseleave = () => dropdown.style.display = "none";
        miniNav.appendChild(wrapper);
      });
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
        <div class="nova-icon c-yellow"><img src="/assets/custom_ui/images/D2.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Total Outstanding Amount Of Distributors Group 60</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Product%20Ageing%20over%20180%20Days')">
        <div class="nova-icon c-orange"><img src="/assets/custom_ui/images/time.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Product Ageing over 180 Days</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard/Outstanding%20Debtors%20Monthwise')">
        <div class="nova-icon c-blue"><img src="/assets/custom_ui/images/debt.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Outstanding Debtors Monthwise</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Top%2050%20selling%20items')">
        <div class="nova-icon c-green"><img src="/assets/custom_ui/images/economy.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Top 50\xA0selling\xA0items</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Bottom%2050%20Selling%20Item')">
        <div class="nova-icon c-red"><img src="/assets/custom_ui/images/bottom-selling.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Bottom 50\xA0selling\xA0items</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Accounts')">
        <div class="nova-icon c-brown"><img src="/assets/custom_ui/images/creditor.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Accounts Dashboard</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Stock')">
        <div class="nova-icon c-orange"><img src="/assets/custom_ui/images/saleinvoice.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Stock Dashboard</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Selling')">
        <div class="nova-icon c-pink"><img src="/assets/custom_ui/images/selling-dashboard.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Selling Dashboard</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Buying')">
        <div class="nova-icon c-grey"><img src="/assets/custom_ui/images/buying-dashboard.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Buying Dashboard</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Manufacturing')">
        <div class="nova-icon c-red"><img src="/assets/custom_ui/images/manufacturing.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Manufacturing Dashboard</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/CRM')">
        <div class="nova-icon c-pink"><img src="/assets/custom_ui/images/crm dashboard.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>CRM Dashboard</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Project')">
        <div class="nova-icon c-purple"><img src="/assets/custom_ui/images/projects-dashboard.png" style="width:60px; height:50px; object-fit: contain;" /></div><div>Project Dashboard</div>
    </div>
    <div class="nova-card" onclick="frappe.set_route('app/dashboard-view/Asset')">
        <div class="nova-icon c-yellow"><img src="/assets/custom_ui/images/item.png" style="width:100px; height:100px; object-fit: contain;" /></div><div>Assets Dashboard</div>
    </div>
</div>
</div>
</div>  
      `;
      let dashboardVisible = true;
      const rightBtn = document.createElement("button");
      rightBtn.innerHTML = '<img src="/assets/custom_ui/images/apps-button.png" style="width:30px; height:35px; object-fit: contain;" />';
      rightBtn.className = "dashboard-btn";
      rightBtn.onclick = () => {
        if (dashboardVisible) {
          dashboardContainer.style.left = "150%";
        } else {
          dashboardContainer.style.left = "20%";
        }
        dashboardVisible = !dashboardVisible;
      };
      miniNav.appendChild(rightBtn);
      leftContainer.appendChild(miniNav);
    };
    const initUI = () => {
      console.log("[custom] Initializing Global Dashboard + MiniNav \u2705");
      createGlobalUI();
      const tryCreateMiniNav = () => {
        const pageHead = document.querySelector(".page-head") || document.body;
        if (!pageHead.querySelector(".page-head-minnav-nova-outer")) {
          console.log("[custom] Creating MiniNav on page \u2705");
          createMiniNav(pageHead);
        }
        setTimeout(tryCreateMiniNav, 300);
      };
      tryCreateMiniNav();
    };
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
    if (window.frappe && frappe.router) {
      frappe.router.on("change", () => {
        setTimeout(() => {
          console.log("[custom] Route change \u2192 recreate MiniNav");
          createMiniNav();
        }, 600);
      });
    }
    var observer = new MutationObserver(function() {
      if (!document.querySelector(".page-head-minnav-nova-outer") && document.querySelector(".page-head")) {
        createMiniNav();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    createMiniNav();
  })();
})();
//# sourceMappingURL=nova_ui.bundle.TFMUWIK7.js.map
