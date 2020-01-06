import React from 'react';
import moment from 'moment';
import { tracks } from '../constants';
import type { MilestoneMap, Milestone } from '../constants';
import pdfMake, { format } from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default class Header extends React.Component {
    splitMultiline(s) {
        return s.replace(/<br\/>/g, '\n');
    }

    buildPdfTableSublevel(title, summary, examples) {
        return [
            { text: title, style: 'header' },
            { text: this.splitMultiline(summary), style: 'paragraph', bold: true },
            { text: 'Examples', style: 'paragraph', color: '#777777' },
            { text: this.splitMultiline(examples), style: 'paragraph' },
        ]
    }

    buildPdfTable() {
        var table = [
            [], // Header
            [], // Description
        ];
        const HEADER = 0;
        const DESCRIPTION = 1;
        const LEVEL_BASE = 2;
        for (const [key, value] of Object.entries(tracks)) {
            table[HEADER].push({
                text: value.displayName,
                fontSize: 10,
                bold: true
            });
            table[DESCRIPTION].push(this.splitMultiline(value.description));
            value.milestones.forEach((level, index) => {
                const levelIndex = LEVEL_BASE + 2 * index;
                if (table.length <= levelIndex) {
                    table.push([], []);
                }
                table[levelIndex].push(this.buildPdfTableSublevel(
                    `Level ${index + 1} Core`,
                    level.signals,
                    level.examples
                ));
                table[levelIndex + 1].push(this.buildPdfTableSublevel(
                    `Level ${index + 1} Advanced`,
                    level.advSignals,
                    level.advExamples
                ));
            });
        }
        return table;
    }

    generatePdf() {
        var docDefinition = {
            pageSize: 'A3',
            pageOrientation: 'landscape',
            pageMargins: [40, 60, 40, 50],
            fontSize: 10,
            header: {
                text: 'Infinity Works skills radar',
                fontSize: 12,
                alignment: 'center',
                color: '#777777',
                margin: [40, 20]
            },
            footer: function (currentPage, pageCount) {
                return {
                    columns: [
                        {
                            text: `exported ${moment().format('D MMM YYYY, HH:mm')}`,
                            fontSize: 8,
                            color: '#777777'
                        },
                        {
                            text: `${currentPage} of ${pageCount}`,
                            alignment: 'right',
                            fontSize: 8,
                            color: '#777777'
                        }
                    ],
                    margin: [40, 30]
                };
            },
            content: [
                {
                    layout: 'lightHorizontalLines',
                    fontSize: 8,
                    table: {
                        headerRows: 1,
                        dontBreakRows: true,
                        tableCellPadding: 10,
                        body: this.buildPdfTable()
                    }
                }
            ],
            styles: {
                header: {
                    fontSize: 10,
                    color: '#666666',
                    margin: [0, 6]
                },
                paragraph: {
                    margin: [0, 0, 0, 6]
                }
            }
        };
        pdfMake.createPdf(docDefinition).download();
    }

    constructor(props) {
        super(props);

        this.generatePdf = this.generatePdf.bind(this);
    }

    render() {
        return (<div>
            <style jsx>{`
                .download {
                    color: #aaa;
                    font-size: 0.8em;
                    text-decoration: none;
                    margin-left: 1em;
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