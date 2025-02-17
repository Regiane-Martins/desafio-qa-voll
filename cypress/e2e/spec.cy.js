describe("Teste de validação de valores", () => {
  beforeEach(() => {
    cy.visit("https://rhuantac.github.io/vaga-qa/");

    cy.get("#dontShowAgain").check();
    cy.get(".bg-white > .w-full").click();
    cy.get(
      ".bg-white.shadow-lg.rounded-lg.p-6.cursor-pointer.hover\\:shadow-xl.transition-shadow"
    )
      .first()
      .click();
  });

  it("Deve permitir realizar um depósito válido e atualizar o saldo", () => {
    const valorEntrada = 100.0;
    const valorInicial = 1000.0;
    const valorTotal = valorInicial + valorEntrada;
    const valorComSimbolo = "R$ " + valorTotal.toFixed(2);

    cy.get("input.w-full.p-2.border.rounded.mb-4").first().type(valorEntrada);
    cy.get(".bg-green-500").click();
    cy.get(".text-4xl.font-bold.text-green-600")
      .invoke("text")
      .then((text) => {
        const textoLimpo = text.replace(/\u00A0/g, "").trim();
        expect(textoLimpo).to.eq(valorComSimbolo);
      });
  });
  it("Não deve permitir transferências com valores superiores ao saldo disponível", () => {
    const saldo = 1000.0;
    const valorTransferencia = 1500.0;

    cy.get('[type="text"]').type("Regiane");
    cy.get(':nth-child(3) > [type="number"]').type(valorTransferencia);
    cy.get(":nth-child(3) > .bg-blue-500").click();

    cy.get(".error-message")
      .should("be.visible")
      .and("contain", "Saldo insuficiente");
  });

  it("Não deve permitir saque com valores negativos", () => {
    const valorSaque = -500.0;

    cy.get('input[placeholder="Valor"].w-full.p-2.border.rounded.mb-4')
      .eq(1)
      .type(valorSaque);

    cy.get(".bg-red-500").click();

    cy.get(".error-message")
      .should("be.visible")
      .and("contain", "O valor do saque não pode ser negativo.");
  });
});
