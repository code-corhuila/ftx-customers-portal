import './App.css'

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">C</span>
          <div>
            <strong>Customers</strong>
            <small>PORTAL</small>
          </div>
        </div>

        <nav className="navigation">
          <span className="nav-label">PRINCIPAL</span>
          <a className="nav-item active" href="#inicio">▦ Resumen</a>
          <a className="nav-item" href="#clientes">♙ Clientes</a>
        </nav>

        <div className="sidebar-footer">
          <span className="status-dot"></span>
          Interfaz en desarrollo
        </div>
      </aside>

      <main className="main-content" id="inicio">
        <header className="topbar">
          <span>Portal / Clientes</span>
          <span className="environment">ENTORNO DE DESARROLLO</span>
        </header>

        <section className="page-heading">
          <p className="eyebrow">CUSTOMERS BOUNDED CONTEXT</p>
          <h1>Portal de clientes</h1>
          <p className="subtitle">Espacio de trabajo para el contexto de clientes.</p>
        </section>

        <section className="welcome-card">
          <div>
            <span className="welcome-tag">FUNDACIÓN DEL PORTAL</span>
            <h2>Bienvenido al portal de clientes</h2>
            <p>
              La interfaz inicial está preparada. Las funcionalidades se
              incorporarán cuando estén definidos los contratos oficiales
              del sistema.
            </p>
          </div>
          <div className="welcome-icon">C</div>
        </section>

        <section className="section" id="clientes">
          <div className="section-heading">
            <div>
              <h2>Área de clientes</h2>
              <p>Estado actual de la integración.</p>
            </div>
            <span className="state-label">Pendiente de integración</span>
          </div>

          <div className="empty-state">
            <div className="empty-icon">⌕</div>
            <h3>Servicios aún no conectados</h3>
            <p>
              No hay registros disponibles. Esta sección se conectará al
              servicio de clientes mediante el frontend principal.
            </p>
          </div>
        </section>

        <footer className="page-footer">Customers Portal</footer>
      </main>
    </div>
  )
}

export default App