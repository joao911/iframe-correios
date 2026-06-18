function App() {
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
          <p style={{ color: "#005ca9" }}>Jequiti</p>
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
            <iframe
              width="100%"
              height="700"
              src="https://hmlpdv.jequiti.com.br/iframe?iframe=true"
              // title="Correios"
              style={{
                border: "none",
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
