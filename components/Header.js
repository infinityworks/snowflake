export default () =>
    <header id="header" className="site-header nav-dark">
        <div className="container">
            <div className="row">
                <div className="col bpxxs-col-12 bps-col-3 bpm-off-col-0 bpm-col-3 bpl-off-col-1 bpl-col-3">
                    <div className="site-header__logo">
                        <a className="site-header__link" href="/">
                            <h1 className="h2 site-header__logo">Infinity Works</h1>
                        </a>
                        <div className="site-header__subtitle" style={{ color: 'white' }}>Core Skills Radar</div>
                    </div>
                </div>

                {/* <div class="col bps-col-3 bpm-off-col-0 bpm-col-3 bpl-off-col-1 bpl-col-3">
                    <input
                        type="text"
                        className="name-input"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                        placeholder="Name"
                        />
                    </div> */}

            </div>
        </div>
    </header>