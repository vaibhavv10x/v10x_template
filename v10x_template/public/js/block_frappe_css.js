frappe.ready(() => {
  document.querySelectorAll('link[href^="/assets/frappe/dist/css/"]').forEach(link => {
    link.remove();
  });
});
