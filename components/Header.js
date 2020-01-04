import React from 'react'
import { tracks } from '../constants'
import type { MilestoneMap, Milestone } from '../constants'
import pdfMake, { format } from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default class Header extends React.Component {

    generatePdf() {
        var body = [
            [], // Header
            [], // Description
        ];
        const HEADER = 0;
        const DESCRIPTION = 1;
        const LEVEL_BASE = 2;
        const splitMultiline = s => s.replace(/<br\/>/g, '\n');
        for (const [key, value] of Object.entries(tracks)) {
            body[HEADER].push({
                text: value.displayName,
                fontSize: 10,
                bold: true
            });
            body[DESCRIPTION].push(splitMultiline(value.description));
            value.milestones.forEach((level, index) => {
                const levelIndex = LEVEL_BASE + index;
                console.log(`index=${index}, levelIndex=${levelIndex}, body.length=${body.length}`);
                if (body.length <= levelIndex) {
                    console.log('Adding row');
                    body.push([]);
                }
                body[levelIndex].push(
                    [
                        { text: `Level ${index + 1} Core`, fontSize: 10, color: '#666666' },
                        ' ',
                        splitMultiline(level.signals),
                        ' ',
                        { text: 'Examples', color: '#666666' },
                        ' ',
                        splitMultiline(level.examples),
                        ' ',
                        { text: `Level ${index + 1} Advanced`, fontSize: 10, color: '#666666' },
                        ' ',
                        splitMultiline(level.advSignals),
                        ' ',
                        { text: 'Examples', color: '#666666' },
                        ' ',
                        splitMultiline(level.advExamples),
                    ]
                );
            });
        }

        var docDefinition = {
            pageSize: 'A3',
            pageOrientation: 'landscape',
            pageMargins: 40,
            fontSize: 10,
            content: [
                {
                    layout: 'lightHorizontalLines',
                    fontSize: 8,
                    table: {
                        headerRows: 1,
                        dontBreakRows: true,
                        tableCellPadding: 10,
                        body: body
                    }
                }
            ]
        };
        pdfMake.createPdf(docDefinition).download();
    }

    render() {
        return (<div>
            <style jsx>{`
                .download {
                    color: #aaa;
                    font-size: 0.8em;
                    text-decoration: none;
                    padding-left: 1em;
                }
                .download:hover {
                    text-decoration: underline;
                }
            `}</style>
            <header id="header" className="site-header nav-dark">
                <div className="container">
                    <div className="row">
                        <div className="col bpxxs-col-12 bps-col-3 bpm-off-col-0 bpm-col-3 bpl-off-col-1 bpl-col-3">
                            <div className="site-header__logo">
                                <a className="site-header__link" href="/">
                                    <h1 className="h2 site-header__logo">Infinity Works</h1>
                                </a>
                                <div className="site-header__subtitle" style={{ color: 'white' }}>
                                    Core Skills Radar
                                    <a className="download" onClick={this.generatePdf} href="#">download</a>
                                </div>
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
        </div>)
    }
}