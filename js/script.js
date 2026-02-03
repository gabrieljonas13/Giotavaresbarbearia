document.addEventListener("DOMContentLoaded", () => {
  const modalAgendar = document.getElementById("modalAgendar");

  if (!modalAgendar) return;

  modalAgendar.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;
    const servico = button.getAttribute("data-servico");

    document.getElementById("servicoSelecionado").innerText = servico;

    const msgGio = `Olá! Quero agendar ${servico} com o Gio.`;
    const msgJoao = `Olá! Quero agendar ${servico} com o João.`;

    document.getElementById("btnGio").href =
      `https://wa.me/5513991088567?text=${encodeURIComponent(msgGio)}`;

    document.getElementById("btnJoao").href =
      `https://wa.me/+5513997266749?text=${encodeURIComponent(msgJoao)}`;
  });
});

/*responsividade*/
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
  }
