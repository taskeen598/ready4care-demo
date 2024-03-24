import React from 'react';
import { AlignmentType, Document, Table, TableCell, TableRow, Packer, Paragraph, TextRun, SymbolRun, ShadingType, BorderStyle } from "docx";
import { Button } from '@mui/material';


const totalChar = 40
const padText = (text, maxLength) => {
    const spacesToAdd = maxLength - text.length;
    if (spacesToAdd > 0) {
        return text + ' '.repeat(spacesToAdd);
    }
    return text;
};

const data = [
    { serviceUserName: 'Ali Muhammad', pickUpTime: "2:00pcm", stafCompletionForm: 'Junaid', arrivalTime: "2:00pm", date: "22/2/2023", dropOffTime: "3:00pm", whoCollected: "Junaid" },
];
const paddedServiceUserName = padText(data[0].serviceUserName, totalChar);
const TestDoc = () => {

    const generateDocument = () => {

        const doc = new Document({
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                left: 600,
                                right: 600
                            }
                        }
                    },
                    children: [
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "DAILY LOG",
                                    bold: true,
                                    font: "Cambria",
                                    size: 34
                                })
                            ]
                        }),
                        new Paragraph({
                            spacing: {
                                before: 200,
                                after: 200
                            },
                            children: [
                                new TextRun({
                                    text: "Service User:   ",
                                    font: "Cambria",
                                    size: 25
                                }),
                                new TextRun({
                                    text: paddedServiceUserName,
                                    font: "Cambria",
                                    size: 25
                                }),
                                new TextRun({
                                    text: "\t\tPick-Up Time/Place:   ",
                                    font: "Cambria",
                                    size: 25
                                }),
                                new TextRun({
                                    text: paddedServiceUserName,
                                    font: "Cambria",
                                    size: 25
                                })
                            ]
                        }),
                        new Paragraph({
                            spacing: {
                                before: 200,
                                after: 200
                            },
                            children: [
                                new TextRun({
                                    text: "Staff Completing Form:   ",
                                    font: "Cambria",
                                    size: 25
                                }),
                                new TextRun({
                                    text: paddedServiceUserName,
                                    font: "Cambria",
                                    size: 25
                                }),
                                new TextRun({
                                    text: "Arrival Time at Center:   ",
                                    font: "Cambria",
                                    size: 25
                                }),
                                new TextRun({
                                    text: paddedServiceUserName,
                                    font: "Cambria",
                                    size: 25
                                })
                            ]
                        }),
                        new Paragraph({
                            spacing: {
                                before: 200,
                                after: 200
                            },
                            children: [
                                new TextRun({
                                    text: "Date/Day:   ",
                                    font: "Cambria",
                                    size: 25
                                }),
                                new TextRun({
                                    text: paddedServiceUserName,
                                    font: "Cambria",
                                    size: 25
                                }),
                                new TextRun({
                                    text: "\t\tDrop-Off Time/Place:   ",
                                    font: "Cambria",
                                    size: 25
                                }),
                                new TextRun({
                                    text: paddedServiceUserName,
                                    font: "Cambria",
                                    size: 25
                                })
                            ]
                        }),
                        new Paragraph({
                            spacing: {
                                before: 200,
                                after: 200
                            },
                            shading: {
                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                color: "8ea9db",
                                fill: "8ea9db",
                            },
                            children: [
                                new TextRun({
                                    text: `Anything to Report from Parents/Carer:    `,
                                    font: "Cambria",
                                    size: 25,
                                    bold: true
                                }),
                                new TextRun({
                                    text: "YES  ",
                                    font: "Cambria",
                                    size: 25,
                                    bold: true
                                }),
                                new SymbolRun("F0FE"),
                                new TextRun({
                                    text: "      No  ",
                                    font: "Cambria",
                                    size: 25,
                                    bold: true
                                }),
                                new SymbolRun("F071"),
                                new TextRun({
                                    text: `                (if yes please specify)`,
                                    font: "Cambria",
                                    size: 20,
                                }),
                            ]
                        }),
                        new Paragraph({
                            spacing: {
                                before: 500,
                                after: 500
                            },

                            children: [
                                new TextRun({
                                    text: `Settled Mood\t\t`,
                                    font: "Cambria",
                                    size: 25,
                                }),
                                new SymbolRun("F071"),
                                new TextRun({
                                    text: "\t\t"
                                }),
                                new TextRun({
                                    text: `Un-Settled Mood\t\t`,
                                    font: "Cambria",
                                    size: 25,
                                }),
                                new SymbolRun("F071"),
                                new TextRun({
                                    text: "\t\t"
                                }),
                                new TextRun({
                                    text: `Agitated\t\t`,
                                    font: "Cambria",
                                    size: 25,
                                }),
                                new SymbolRun("F071"),
                            ]
                        }),
                        new Paragraph({
                            spacing: {
                                before: 500,
                                after: 500
                            },

                            children: [
                                new TextRun({
                                    text: `Positive Behaviour\t`,
                                    font: "Cambria",
                                    size: 25,
                                }),
                                new SymbolRun("F071"),
                                new TextRun({
                                    text: "\t\t"
                                }),
                                new TextRun({
                                    text: `Negative Behaviour\t\t`,
                                    font: "Cambria",
                                    size: 25,
                                }),
                                new SymbolRun("F071"),
                                new TextRun({
                                    text: "\t\t"
                                }),
                                new TextRun({
                                    text: `Aggressive\t\t`,
                                    font: "Cambria",
                                    size: 25,
                                }),
                                new SymbolRun("F071"),
                            ]
                        }),
                        new Paragraph({
                            spacing: {
                                before: 500,
                                after: 500
                            },

                            children: [
                                new TextRun({
                                    text: `Good Sleep\t\t`,
                                    font: "Cambria",
                                    size: 25,
                                }),
                                new SymbolRun("F071"),
                                new TextRun({
                                    text: "\t\t"
                                }),
                                new TextRun({
                                    text: `Not a Good Sleep\t\t`,
                                    font: "Cambria",
                                    size: 25,
                                }),
                                new SymbolRun("F071"),
                                new TextRun({
                                    text: "\t\t"
                                }),
                                new TextRun({
                                    text: `Have Breakfast\t`,
                                    font: "Cambria",
                                    size: 25,
                                }),
                                new SymbolRun("F071"),
                            ]
                        }),
                        new Paragraph({
                            spacing: {
                                before: 500,
                                after: 500
                            },

                            children: [
                                new TextRun({
                                    text: `Co-operative\t\t`,
                                    font: "Cambria",
                                    size: 25,
                                }),
                                new SymbolRun("F071"),
                                new TextRun({
                                    text: "\t\t"
                                }),
                                new TextRun({
                                    text: `Non-Cooperative\t\t`,
                                    font: "Cambria",
                                    size: 25,
                                }),
                                new SymbolRun("F071"),
                                new TextRun({
                                    text: "\t\t"
                                }),
                                new TextRun({
                                    text: `No Breakfast\t\t`,
                                    font: "Cambria",
                                    size: 25,
                                }),
                                new SymbolRun("F071"),
                            ]
                        }),
                        new Paragraph({
                            text: "I have borders on my top and bottom sides!",
                            border: {
                                top: {
                                    color: "auto",
                                    space: 50,
                                    style: "single",
                                    size: 6,
                                },
                                bottom: {
                                    color: "auto",
                                    space: 50,
                                    style: "single",
                                    size: 6,
                                },
                                right: {
                                    color: "auto",
                                    space: 5,
                                    style: "single",
                                    size: 5,
                                },
                                left: {
                                    color: "auto",
                                    space: 5,
                                    style: "single",
                                    size: 5,
                                }


                            },
                        }),
                        new Paragraph({
                            spacing: {
                                before: 200,
                                after: 200
                            },
                            shading: {
                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                color: "8ea9db",
                                fill: "8ea9db",
                            },
                            children: [
                                new TextRun({
                                    text: `Service User Mood Expressions when arrived at Centre:    `,
                                    font: "Cambria",
                                    size: 25,
                                    bold: true
                                }),
                                new SymbolRun("F0FE"),
                                new SymbolRun({ char: "F04A", bold: true, size: 60, color: "FFFF00" }),

                                new TextRun({
                                    text: "\t ",
                                }),
                                new SymbolRun("F0FE"),
                                new SymbolRun({ char: "F04B", bold: true, size: 60, color: "FFFF00" }),

                                new TextRun({
                                    text: "\t ",
                                }),
                                new SymbolRun("F0FE"),
                                new SymbolRun({ char: "F04C", bold: true, size: 60, color: "FFFF00" }),
                            ]
                        }),
                        new Table({
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ text: "Pad Change:", bold: true })],
                                            shading: { type: ShadingType.SOLID, color: '00FFFF' }, // Blue background color
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 1 },
                                                bottom: { style: BorderStyle.SINGLE, size: 1 },
                                                left: { style: BorderStyle.SINGLE, size: 1 },
                                                right: { style: BorderStyle.SINGLE, size: 1 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 50,
                                                right: 50,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "Wet", bold: true })],
                                            shading: { type: ShadingType.SOLID, color: '00FFFF' }, // Blue background color
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "Dry", bold: true })],
                                            shading: { type: ShadingType.SOLID, color: '00FFFF' }, // Blue background color
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "Soiled", bold: true })],
                                            shading: { type: ShadingType.SOLID, color: '00FFFF' }, // Blue background color
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "Time", bold: true })],
                                            shading: { type: ShadingType.SOLID, color: '00FFFF' }, // Blue background color
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "Wet", bold: true })],
                                            shading: { type: ShadingType.SOLID, color: '00FFFF' }, // Blue background color
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "Dry", bold: true })],
                                            shading: { type: ShadingType.SOLID, color: '00FFFF' }, // Blue background color
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "Soiled", bold: true })],
                                            shading: { type: ShadingType.SOLID, color: '00FFFF' }, // Blue background color
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "Time", bold: true })],
                                            shading: { type: ShadingType.SOLID, color: '00FFFF' }, // Blue background color
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "Wet", bold: true })],
                                            shading: { type: ShadingType.SOLID, color: '00FFFF' }, // Blue background color
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "Dry", bold: true })],
                                            shading: { type: ShadingType.SOLID, color: '00FFFF' }, // Blue background color
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "Soiled", bold: true })],
                                            shading: { type: ShadingType.SOLID, color: '00FFFF' }, // Blue background color
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "Time", bold: true })],
                                            shading: { type: ShadingType.SOLID, color: '00FFFF' }, // Blue background color
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                    ]
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            rowSpan: 4,
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: "Yes",
                                                        }),
                                                        new TextRun({
                                                            text: "   ",
                                                        }),

                                                        new SymbolRun("F0FE"),
                                                        new TextRun({
                                                            text: "       ",
                                                        }),


                                                        new TextRun({
                                                            text: "No",
                                                        }),

                                                        new TextRun({
                                                            text: "   ",
                                                        }),
                                                        new SymbolRun("F071"),

                                                        new TextRun({
                                                            text: "            ",
                                                        }),
                                                        new TextRun({
                                                            text: " (If yes tick type & mention time)",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 1 },
                                                bottom: { style: BorderStyle.SINGLE, size: 1 },
                                                left: { style: BorderStyle.SINGLE, size: 1 },
                                                right: { style: BorderStyle.SINGLE, size: 1 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 50,
                                                right: 50,
                                            },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                    ]
                                }),
                                new TableRow({
                                    children: [

                                        new TableCell({
                                            children: [new Paragraph({ text: String.fromCharCode(0x2713), bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                    ]
                                }),
                                new TableRow({
                                    children: [

                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                    ]
                                }),
                                new TableRow({
                                    children: [

                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", bold: true })],
                                            borders: {
                                                top: { style: BorderStyle.SINGLE, size: 5 },
                                                bottom: { style: BorderStyle.SINGLE, size: 5 },
                                                left: { style: BorderStyle.SINGLE, size: 5 },
                                                right: { style: BorderStyle.SINGLE, size: 5 },
                                            },
                                            margins: {
                                                top: 50,
                                                bottom: 50,
                                                left: 200,
                                                right: 200,
                                            }
                                        }),
                                    ]
                                }),
                            ]
                        }),

                    ]
                }
            ]
        });

        Packer.toBlob(doc).then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'My Document.docx';
            a.click();
            window.URL.revokeObjectURL(url);
        });
    }

    return (
        <div>
            <Button onClick={generateDocument} variant="contained" color="primary">Download</Button>

            {/* <button >Export Data to Word</button> */}
        </div>
    );
}

export default TestDoc;
