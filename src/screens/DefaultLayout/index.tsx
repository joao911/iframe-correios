import { Outlet, useNavigate } from "react-router-dom";

export const DefaultLayout = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          height: 80,
          background: "#fff",
          borderBottom: "2px solid #f7b500",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <h1 style={{ color: "#005ca9" }}>Correios</h1>
      </div>

      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: 250,
            background: "#fff",
            borderRight: "1px solid #ddd",
            padding: 20,
          }}
        >
          <p style={{ color: "#005ca9" }}>Pagina inicial</p>
          <p
            onClick={() => navigate("/sales")}
            style={{ color: "#005ca9", cursor: "pointer" }}
          >
            Venda de carnes
          </p>
          <p
            onClick={() => navigate("/paymentInstallments")}
            style={{ color: "#005ca9" }}
          >
            Pagamento de parcelas
          </p>
        </aside>

        {/* Conteúdo */}
        <main
          style={{
            flex: 1,
            // padding: "40px 80px",
          }}
        >
          <p style={{ color: "#666" }}>
            Portal Correios &gt; <strong>Jequiti</strong>
          </p>

          <div style={{ maxWidth: "100%", background: "#fff" }}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
