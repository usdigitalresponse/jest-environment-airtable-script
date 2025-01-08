import { FieldType, ViewType } from '@airtable/blocks/models'

export default {
  base: {
    id: 'appRandomRecordGe',
    name: 'Random Record Generator demo',
    color: 'greenDusty',
    tables: [
      {
        id: 'tblTableA',
        name: 'Table A',
        description: '',
        fields: [
          {
            id: 'fldName',
            name: 'Name',
            description: '',
            type: FieldType.SINGLE_LINE_TEXT,
            options: null,
          },
          {
            id: 'fldNotes',
            name: 'Notes',
            description: '',
            type: FieldType.MULTILINE_TEXT,
            options: null,
          },
          {
            id: 'fldPhone',
            name: 'Phone',
            description: '',
            type: FieldType.PHONE_NUMBER,
            options: null,
          },
          {
            id: 'fldStatus',
            name: 'Status',
            description: '',
            type: FieldType.SINGLE_SELECT,
            options: {
              choices: [
                {
                  id: 'selTodo',
                  name: 'Todo',
                  color: 'redLight2',
                },
                {
                  id: 'selInProgress',
                  name: 'In progress',
                  color: 'yellowLight2',
                },
                {
                  id: 'selDone',
                  name: 'Done',
                  color: 'greenLight2',
                },
              ],
            },
          },
          {
            id: 'fldStreetAddress',
            name: 'Street address',
            description: '',
            type: FieldType.SINGLE_LINE_TEXT,
            options: null,
          },
          {
            id: 'fldCity',
            name: 'City',
            description: '',
            type: FieldType.SINGLE_LINE_TEXT,
            options: null,
          },
          {
            id: 'fldState',
            name: 'State',
            description: '',
            type: FieldType.SINGLE_LINE_TEXT,
            options: null,
          },
          {
            id: 'fldMultipleOption',
            name: 'Multiple options',
            description: '',
            type: FieldType.MULTIPLE_SELECTS,
            options: {
              choices: [
                {
                  id: 'selOptionA',
                  name: 'Option A',
                  color: 'blueLight2',
                },
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
            },
          },
          {
            id: 'fldDate',
            name: 'Date',
            description: '',
            type: FieldType.DATE,
            options: {
              dateFormat: {
                name: 'local',
                format: 'l',
              },
            },
          },
          {
            id: 'fldDateWithTime',
            name: 'Date with time',
            description: '',
            type: FieldType.DATE_TIME,
            options: {
              dateFormat: {
                name: 'local',
                format: 'l',
              },
              timeFormat: {
                name: '12hour',
                format: 'h:mma',
              },
              timeZone: 'client',
            },
          },
          {
            id: 'fldCheckbox',
            name: 'Checkbox',
            description: '',
            type: FieldType.CHECKBOX,
            options: {
              icon: 'check',
              color: 'greenBright',
            },
          },
          {
            id: 'fldURL',
            name: 'URL',
            description: '',
            type: FieldType.URL,
            options: null,
          },
          {
            id: 'fldIntegerNumber',
            name: 'Integer number',
            description: '',
            type: FieldType.NUMBER,
            options: {
              precision: 0,
            },
          },
          {
            id: 'fldDecimalNumber',
            name: 'Decimal number',
            description: '',
            type: FieldType.NUMBER,
            options: {
              precision: 8,
            },
          },
          {
            id: 'fldPercentage',
            name: 'Percentage',
            description: '',
            type: FieldType.PERCENT,
            options: {
              precision: 0,
            },
          },
          {
            id: 'fldDuration',
            name: 'Duration',
            description: '',
            type: FieldType.DURATION,
            options: {
              durationFormat: 'h:mm',
            },
          },
          {
            id: 'fldRating',
            name: 'Rating',
            description: '',
            type: FieldType.RATING,
            options: {
              icon: 'heart',
              max: 5,
              color: 'redBright',
            },
          },
          {
            id: 'fldLinkSingle',
            name: 'Link - single',
            description: '',
            type: FieldType.MULTIPLE_RECORD_LINKS,
            options: {
              linkedTableId: 'tblTableB',
              isReversed: false,
              prefersSingleRecordLink: true,
              inverseLinkFieldId: 'fldTableA',
              viewIdForRecordSelection: undefined,
            },
          },
          {
            id: 'fldLinkMultiple',
            name: 'Link - multiple',
            description: '',
            type: FieldType.MULTIPLE_RECORD_LINKS,
            options: {
              linkedTableId: 'tblTableB',
              isReversed: false,
              prefersSingleRecordLink: false,
              inverseLinkFieldId: 'fldTableA2',
              viewIdForRecordSelection: undefined,
            },
          },
          {
            id: 'fldAttachments',
            name: 'Attachments',
            description: '',
            type: FieldType.MULTIPLE_ATTACHMENTS,
            options: {
              isReversed: false,
            },
          },
          {
            id: 'fldDollars',
            name: 'Dollars',
            description: '',
            type: FieldType.CURRENCY,
            options: {
              precision: 2,
              symbol: '$',
            },
          },
          {
            id: 'fldEuros',
            name: 'Euros',
            description: '',
            type: FieldType.CURRENCY,
            options: {
              precision: 2,
              symbol: '\u20AC',
            },
          },
        ],
        views: [
          {
            id: 'viwAllRecords',
            name: 'All records',
            type: ViewType.GRID,
            fieldOrder: {
              fieldIds: [
                'fldName',
                'fldAttachments',
                'fldNotes',
                'fldPhone',
                'fldStatus',
                'fldStreetAddress',
                'fldCity',
                'fldState',
                'fldMultipleOption',
                'fldDate',
                'fldDateWithTime',
                'fldCheckbox',
                'fldURL',
                'fldIntegerNumber',
                'fldDecimalNumber',
                'fldPercentage',
                'fldDuration',
                'fldRating',
                'fldLinkSingle',
                'fldLinkMultiple',
                'fldDollars',
                'fldEuros',
              ],
              visibleFieldCount: 22,
            },
            records: [
              {
                id: 'recPatrickWunsch',
                color: null,
              },
              {
                id: 'recVeraVonRueden',
                color: null,
              },
              {
                id: 'recRyanRogahn',
                color: null,
              },
              {
                id: 'recNoahReichelSch',
                color: null,
              },
              {
                id: 'recLatoyaMurray',
                color: null,
              },
              {
                id: 'recMrErikSchuppe',
                color: null,
              },
              {
                id: 'recJennaVon',
                color: null,
              },
              {
                id: 'recLulaBins',
                color: null,
              },
              {
                id: 'recTerryWalker',
                color: null,
              },
              {
                id: 'recCeliaRau',
                color: null,
              },
              {
                id: 'recMonicaSchroede',
                color: null,
              },
              {
                id: 'recUnnamed',
                color: null,
              },
              {
                id: 'recVictoriaTurner',
                color: null,
              },
              {
                id: 'recDrLanceHeidenr',
                color: null,
              },
              {
                id: 'recDrWilbertLarki',
                color: null,
              },
              {
                id: 'recMicheleAufderh',
                color: null,
              },
              {
                id: 'recGordonGislason',
                color: null,
              },
              {
                id: 'recMsJaniceHomeni',
                color: null,
              },
              {
                id: 'recCarolynWillms',
                color: null,
              },
              {
                id: 'recMarianHettinge',
                color: null,
              },
              {
                id: 'recClaudeKoelpin',
                color: null,
              },
              {
                id: 'recAdamBechtelar',
                color: null,
              },
              {
                id: 'recRomanHammes',
                color: null,
              },
              {
                id: 'recHowardBahringe',
                color: null,
              },
              {
                id: 'recAgnesRutherfor',
                color: null,
              },
              {
                id: 'recDebbieGoldner',
                color: null,
              },
              {
                id: 'recCristinaFahey',
                color: null,
              },
              {
                id: 'recRaymondAbernat',
                color: null,
              },
              {
                id: 'recDrHollyHodkiew',
                color: null,
              },
              {
                id: 'recReginaldRunolf',
                color: null,
              },
              {
                id: 'recDrGregoryPfann',
                color: null,
              },
              {
                id: 'recHenriettaKohle',
                color: null,
              },
            ],
          },
          {
            id: 'viwOnlyDoctors',
            name: 'Only Doctors',
            type: ViewType.GRID,
            fieldOrder: {
              fieldIds: [
                'fldName',
                'fldAttachments',
                'fldNotes',
                'fldPhone',
                'fldStatus',
                'fldStreetAddress',
                'fldCity',
                'fldState',
                'fldMultipleOption',
                'fldDate',
                'fldDateWithTime',
                'fldCheckbox',
                'fldURL',
                'fldIntegerNumber',
                'fldDecimalNumber',
                'fldPercentage',
                'fldDuration',
                'fldRating',
                'fldLinkSingle',
                'fldLinkMultiple',
                'fldDollars',
                'fldEuros',
              ],
              visibleFieldCount: 22,
            },
            records: [
              {
                id: 'recDrLanceHeidenr',
                color: null,
              },
              {
                id: 'recDrWilbertLarki',
                color: null,
              },
              {
                id: 'recDrHollyHodkiew',
                color: null,
              },
              {
                id: 'recDrGregoryPfann',
                color: null,
              },
            ],
          },
        ],
        records: [
          {
            id: 'recPatrickWunsch',
            commentCount: 0,
            createdTime: '2024-04-26T20:16:16.000Z',
            cellValuesByFieldId: {
              fldName: 'Patrick Wunsch',
              fldNotes: 'East Dejuan',
              fldPhone: '597.589.2418',
              fldStatus: {
                id: 'selDone',
                name: 'Done',
                color: 'greenLight2',
              },
              fldStreetAddress: '82107 Huels Forge',
              fldCity: 'Port Bria',
              fldState: 'NY',
              fldMultipleOption: [
                {
                  id: 'selOptionA',
                  name: 'Option A',
                  color: 'blueLight2',
                },
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
              ],
              fldDate: '2024-10-19',
              fldDateWithTime: '2023-09-10T08:47:43.781Z',
              fldCheckbox: true,
              fldURL: 'https://gleeful-rush.biz/',
              fldIntegerNumber: 97,
              fldDecimalNumber: 31.727967644110322,
              fldPercentage: 0.41551294713281095,
              fldDuration: 30188,
              fldRating: 1,
              fldLinkSingle: [
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recF',
                  name: 'F',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats/original',
                  size: 102100,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 708.25,
              fldEuros: 215.11,
            },
          },
          {
            id: 'recVeraVonRueden',
            commentCount: 0,
            createdTime: '2024-04-26T20:16:19.000Z',
            cellValuesByFieldId: {
              fldName: 'Vera VonRueden',
              fldNotes: 'South Leora',
              fldPhone: '291-256-6174 x5305',
              fldStatus: {
                id: 'selTodo',
                name: 'Todo',
                color: 'redLight2',
              },
              fldStreetAddress: "7471 O'Connell Flat",
              fldCity: 'East Ahmad',
              fldState: 'AR',
              fldMultipleOption: null,
              fldDate: '2024-01-07',
              fldDateWithTime: '2024-01-04T18:09:55.823Z',
              fldCheckbox: true,
              fldURL: 'https://unequaled-hedge.org/',
              fldIntegerNumber: 82,
              fldDecimalNumber: 70.09966720361263,
              fldPercentage: 0.4214859795756638,
              fldDuration: 72189,
              fldRating: 4,
              fldLinkSingle: [
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats2',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats2/original',
                  size: 81451,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats2/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats2/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats2/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 62.59,
              fldEuros: 949.02,
            },
          },
          {
            id: 'recRyanRogahn',
            commentCount: 0,
            createdTime: '2024-04-26T20:16:20.000Z',
            cellValuesByFieldId: {
              fldName: 'Ryan Rogahn',
              fldNotes: 'Santaville',
              fldPhone: '(689) 417-7405 x9860',
              fldStatus: {
                id: 'selDone',
                name: 'Done',
                color: 'greenLight2',
              },
              fldStreetAddress: '4655 Ole Way',
              fldCity: 'East Kadenworth',
              fldState: 'NM',
              fldMultipleOption: [
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
              ],
              fldDate: '2023-05-06',
              fldDateWithTime: '2023-06-01T08:29:08.753Z',
              fldCheckbox: true,
              fldURL: 'https://political-lipoprotein.net',
              fldIntegerNumber: 24,
              fldDecimalNumber: 56.480312324129045,
              fldPercentage: 0.28289106977172196,
              fldDuration: 1290,
              fldRating: 3,
              fldLinkSingle: [
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recF',
                  name: 'F',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recF',
                  name: 'F',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats3',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats3/original',
                  size: 38134,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats3/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats3/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats3/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 308.8,
              fldEuros: 106.36,
            },
          },
          {
            id: 'recNoahReichelSch',
            commentCount: 0,
            createdTime: '2024-04-26T20:16:21.000Z',
            cellValuesByFieldId: {
              fldName: 'Noah Reichel-Schmeler',
              fldNotes: 'South Lazaro',
              fldPhone: '687.559.5291 x0413',
              fldStatus: {
                id: 'selDone',
                name: 'Done',
                color: 'greenLight2',
              },
              fldStreetAddress: '2510 E 8th Street',
              fldCity: 'Autumnstead',
              fldState: 'CT',
              fldMultipleOption: [
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
              fldDate: '2023-10-13',
              fldDateWithTime: '2023-12-26T23:46:23.105Z',
              fldCheckbox: null,
              fldURL: 'https://adored-honoree.org/',
              fldIntegerNumber: 88,
              fldDecimalNumber: 26.935610501095653,
              fldPercentage: 0.29765006504021585,
              fldDuration: 73440,
              fldRating: 4,
              fldLinkSingle: [
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats4',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats4/original',
                  size: 102100,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats4/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats4/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats4/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 484.67,
              fldEuros: 646.48,
            },
          },
          {
            id: 'recLatoyaMurray',
            commentCount: 0,
            createdTime: '2024-04-26T20:16:21.000Z',
            cellValuesByFieldId: {
              fldName: 'Latoya Murray',
              fldNotes: 'Emmerichstad',
              fldPhone: '1-546-557-3887',
              fldStatus: {
                id: 'selInProgress',
                name: 'In progress',
                color: 'yellowLight2',
              },
              fldStreetAddress: '60830 Abshire Corner',
              fldCity: 'Rippinhaven',
              fldState: 'WV',
              fldMultipleOption: [
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
              ],
              fldDate: '2023-05-14',
              fldDateWithTime: '2024-03-24T14:43:25.035Z',
              fldCheckbox: true,
              fldURL: 'https://hungry-yeast.info/',
              fldIntegerNumber: 20,
              fldDecimalNumber: 79.17620134539902,
              fldPercentage: 0.28896975447423756,
              fldDuration: 40804,
              fldRating: 3,
              fldLinkSingle: [
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recF',
                  name: 'F',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats5',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats5/original',
                  size: 64869,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats5/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats5/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats5/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 43.02,
              fldEuros: 876.51,
            },
          },
          {
            id: 'recMrErikSchuppe',
            commentCount: 0,
            createdTime: '2024-04-26T20:16:22.000Z',
            cellValuesByFieldId: {
              fldName: 'Mr. Erik Schuppe',
              fldNotes: 'Lake Avery',
              fldPhone: '745-375-3199 x688',
              fldStatus: {
                id: 'selInProgress',
                name: 'In progress',
                color: 'yellowLight2',
              },
              fldStreetAddress: '29991 Valerie Loaf',
              fldCity: 'San Francisco',
              fldState: 'AR',
              fldMultipleOption: [
                {
                  id: 'selOptionA',
                  name: 'Option A',
                  color: 'blueLight2',
                },
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
              fldDate: '2024-10-11',
              fldDateWithTime: '2023-05-05T19:26:28.441Z',
              fldCheckbox: null,
              fldURL: 'https://spherical-rainbow.com/',
              fldIntegerNumber: 78,
              fldDecimalNumber: 9.083791938610375,
              fldPercentage: 0.15464623412117362,
              fldDuration: 78957,
              fldRating: 3,
              fldLinkSingle: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats6',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats6/original',
                  size: 71416,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats6/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats6/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats6/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 600.39,
              fldEuros: 666.66,
            },
          },
          {
            id: 'recJennaVon',
            commentCount: 0,
            createdTime: '2024-04-26T20:16:22.000Z',
            cellValuesByFieldId: {
              fldName: 'Jenna Von',
              fldNotes: 'Weissnatboro',
              fldPhone: '1-587-679-0652 x788',
              fldStatus: {
                id: 'selTodo',
                name: 'Todo',
                color: 'redLight2',
              },
              fldStreetAddress: '573 Colleen Lights',
              fldCity: 'Fort Michealville',
              fldState: 'FL',
              fldMultipleOption: [
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
              fldDate: '2024-04-04',
              fldDateWithTime: '2023-05-30T00:25:36.899Z',
              fldCheckbox: null,
              fldURL: 'https://dependable-promise.biz',
              fldIntegerNumber: 55,
              fldDecimalNumber: 58.08686106465757,
              fldPercentage: 0.9105372657068074,
              fldDuration: 74746,
              fldRating: 1,
              fldLinkSingle: [
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats7',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats7/original',
                  size: 86568,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats7/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats7/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats7/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 321.52,
              fldEuros: 363.23,
            },
          },
          {
            id: 'recLulaBins',
            commentCount: 0,
            createdTime: '2024-04-26T20:16:23.000Z',
            cellValuesByFieldId: {
              fldName: 'Lula Bins',
              fldNotes: 'West Joshuahmouth',
              fldPhone: '(281) 589-3629',
              fldStatus: {
                id: 'selDone',
                name: 'Done',
                color: 'greenLight2',
              },
              fldStreetAddress: '999 Baumbach Turnpike',
              fldCity: 'Torpton',
              fldState: 'GA',
              fldMultipleOption: [
                {
                  id: 'selOptionA',
                  name: 'Option A',
                  color: 'blueLight2',
                },
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
              fldDate: '2025-02-11',
              fldDateWithTime: '2023-08-09T00:28:47.999Z',
              fldCheckbox: null,
              fldURL: 'https://sore-ecumenist.info/',
              fldIntegerNumber: 43,
              fldDecimalNumber: 15.275399549864233,
              fldPercentage: 0.33273288677446544,
              fldDuration: 64744,
              fldRating: 5,
              fldLinkSingle: [
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recF',
                  name: 'F',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats8',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats8/original',
                  size: 50018,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats8/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats8/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats8/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 801.14,
              fldEuros: 421.83,
            },
          },
          {
            id: 'recTerryWalker',
            commentCount: 0,
            createdTime: '2024-04-26T20:16:23.000Z',
            cellValuesByFieldId: {
              fldName: 'Terry Walker',
              fldNotes: 'Victoria',
              fldPhone: '(690) 607-4827 x379',
              fldStatus: {
                id: 'selDone',
                name: 'Done',
                color: 'greenLight2',
              },
              fldStreetAddress: '2651 Herminia Ford',
              fldCity: 'West Warrenfort',
              fldState: 'HI',
              fldMultipleOption: [
                {
                  id: 'selOptionA',
                  name: 'Option A',
                  color: 'blueLight2',
                },
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
              ],
              fldDate: '2023-05-11',
              fldDateWithTime: '2023-07-19T09:44:03.030Z',
              fldCheckbox: null,
              fldURL: 'https://gracious-scrambled.net',
              fldIntegerNumber: 67,
              fldDecimalNumber: 52.96997623518109,
              fldPercentage: 0.9092927572783083,
              fldDuration: 39320,
              fldRating: 5,
              fldLinkSingle: [
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats9',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats9/original',
                  size: 28800,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats9/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats9/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats9/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 554.13,
              fldEuros: 734.52,
            },
          },
          {
            id: 'recCeliaRau',
            commentCount: 0,
            createdTime: '2024-04-26T20:16:24.000Z',
            cellValuesByFieldId: {
              fldName: 'Celia Rau',
              fldNotes: 'Warwick',
              fldPhone: '(369) 488-1095 x8256',
              fldStatus: {
                id: 'selInProgress',
                name: 'In progress',
                color: 'yellowLight2',
              },
              fldStreetAddress: '160 Lavon Valley',
              fldCity: 'New Karson',
              fldState: 'VT',
              fldMultipleOption: [
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
              fldDate: '2024-05-21',
              fldDateWithTime: '2023-08-31T18:20:17.390Z',
              fldCheckbox: null,
              fldURL: 'https://insubstantial-paddock.biz/',
              fldIntegerNumber: 21,
              fldDecimalNumber: 36.15145208314061,
              fldPercentage: 0.04844356421381235,
              fldDuration: 47435,
              fldRating: 2,
              fldLinkSingle: [
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recF',
                  name: 'F',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats10',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats10/original',
                  size: 38134,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats10/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats10/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats10/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 855.3,
              fldEuros: 0.25,
            },
          },
          {
            id: 'recMonicaSchroede',
            commentCount: 0,
            createdTime: '2024-04-29T22:35:18.000Z',
            cellValuesByFieldId: {
              fldName: 'Monica Schroeder',
              fldNotes: "O'Reillyton",
              fldPhone: '521.281.9261 x5267',
              fldStatus: {
                id: 'selDone',
                name: 'Done',
                color: 'greenLight2',
              },
              fldStreetAddress: '424 Lorenza View',
              fldCity: 'Lizashire',
              fldState: 'MD',
              fldMultipleOption: null,
              fldDate: '2024-11-24',
              fldDateWithTime: '2024-02-02T19:25:01.159Z',
              fldCheckbox: null,
              fldURL: 'https://compassionate-federation.info',
              fldIntegerNumber: 20,
              fldDecimalNumber: 82.71603423636407,
              fldPercentage: 0.8502193063031882,
              fldDuration: 29830,
              fldRating: 3,
              fldLinkSingle: [
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recF',
                  name: 'F',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats11',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats11/original',
                  size: 29644,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats11/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats11/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats11/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 724.71,
              fldEuros: 621.91,
            },
          },
          {
            id: 'recUnnamed',
            commentCount: 0,
            createdTime: '2024-04-29T22:51:16.000Z',
            cellValuesByFieldId: {
              fldName: null,
              fldNotes: null,
              fldPhone: null,
              fldStatus: null,
              fldStreetAddress: null,
              fldCity: null,
              fldState: null,
              fldMultipleOption: null,
              fldDate: null,
              fldDateWithTime: null,
              fldCheckbox: null,
              fldURL: null,
              fldIntegerNumber: null,
              fldDecimalNumber: null,
              fldPercentage: null,
              fldDuration: null,
              fldRating: null,
              fldLinkSingle: [
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
              ],
              fldAttachments: null,
              fldDollars: null,
              fldEuros: null,
            },
          },
          {
            id: 'recVictoriaTurner',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:28.000Z',
            cellValuesByFieldId: {
              fldName: 'Victoria Turner',
              fldNotes:
                'Ipsum substantia curiositas aequitas beatae. Damnatio absorbeo arbitro ultio. Somnus constans vilicus sumo.',
              fldPhone: '1-482-636-3971 x63808',
              fldStatus: {
                id: 'selInProgress',
                name: 'In progress',
                color: 'yellowLight2',
              },
              fldStreetAddress: '7002 Amaya Alley',
              fldCity: 'West Jacquesshire',
              fldState: 'ID',
              fldMultipleOption: [
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
              ],
              fldDate: '2023-08-31',
              fldDateWithTime: '2024-12-13T07:25:39.112Z',
              fldCheckbox: null,
              fldURL: 'https://flashy-frame.info/',
              fldIntegerNumber: 6,
              fldDecimalNumber: 60.11839720886201,
              fldPercentage: 0.09274028264917433,
              fldDuration: 12096,
              fldRating: null,
              fldLinkSingle: [
                {
                  id: 'recG',
                  name: 'G',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recF',
                  name: 'F',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats12',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats12/original',
                  size: 49293,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats12/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats12/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats12/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 577.04,
              fldEuros: 652.99,
            },
          },
          {
            id: 'recDrLanceHeidenr',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:28.000Z',
            cellValuesByFieldId: {
              fldName: 'Dr. Lance Heidenreich',
              fldNotes:
                'Quo damno accusantium coaegresco aperiam cunctatio ea dicta. Catena adeptio terebro tergiversatio vae cogito tametsi vallum denuncio adicio. Bis civis tego uredo decumbo.',
              fldPhone: '(578) 916-8833',
              fldStatus: {
                id: 'selInProgress',
                name: 'In progress',
                color: 'yellowLight2',
              },
              fldStreetAddress: '4667 Ernser Parkway',
              fldCity: 'New Madie',
              fldState: 'OH',
              fldMultipleOption: [
                {
                  id: 'selOptionA',
                  name: 'Option A',
                  color: 'blueLight2',
                },
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
              fldDate: '2023-11-13',
              fldDateWithTime: '2024-03-03T18:27:57.869Z',
              fldCheckbox: true,
              fldURL: 'https://nonstop-endpoint.org/',
              fldIntegerNumber: 10,
              fldDecimalNumber: 28.285133955068886,
              fldPercentage: 0.8996197776868939,
              fldDuration: 26173,
              fldRating: null,
              fldLinkSingle: [
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats13',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats13/original',
                  size: 102100,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats13/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats13/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats13/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 256.07,
              fldEuros: 221.24,
            },
          },
          {
            id: 'recDrWilbertLarki',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:29.000Z',
            cellValuesByFieldId: {
              fldName: 'Dr. Wilbert Larkin',
              fldNotes:
                'Velit deinde laudantium. Cultura demitto usque appono suppellex sollers sulum pecus defungo valeo. Usitas casus pariatur molestias.',
              fldPhone: '605.686.2566 x505',
              fldStatus: {
                id: 'selTodo',
                name: 'Todo',
                color: 'redLight2',
              },
              fldStreetAddress: '4130 Torp Common',
              fldCity: 'West Narciso',
              fldState: 'ME',
              fldMultipleOption: [
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
              ],
              fldDate: '2023-06-05',
              fldDateWithTime: '2023-06-12T04:12:29.186Z',
              fldCheckbox: true,
              fldURL: 'https://urban-activation.biz/',
              fldIntegerNumber: 12,
              fldDecimalNumber: 6.550841871649027,
              fldPercentage: 0.9278272651135921,
              fldDuration: 54019,
              fldRating: null,
              fldLinkSingle: [
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats14',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats14/original',
                  size: 29903,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats14/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats14/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats14/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 742.79,
              fldEuros: 657.59,
            },
          },
          {
            id: 'recMicheleAufderh',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:29.000Z',
            cellValuesByFieldId: {
              fldName: 'Michele Aufderhar II',
              fldNotes:
                'Creator cunae alveus strenuus appono arguo complectus animi aetas tenus. Amicitia creptio occaecati. Vitium comptus beatae.',
              fldPhone: '(635) 952-9896 x2221',
              fldStatus: {
                id: 'selTodo',
                name: 'Todo',
                color: 'redLight2',
              },
              fldStreetAddress: '8585 Clinton Street',
              fldCity: 'Deltona',
              fldState: 'WV',
              fldMultipleOption: [
                {
                  id: 'selOptionA',
                  name: 'Option A',
                  color: 'blueLight2',
                },
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
              fldDate: '2024-01-23',
              fldDateWithTime: '2023-05-16T02:40:39.709Z',
              fldCheckbox: true,
              fldURL: 'https://fortunate-infancy.com',
              fldIntegerNumber: 89,
              fldDecimalNumber: 94.88153103739023,
              fldPercentage: 0.6818532848265022,
              fldDuration: 74940,
              fldRating: 3,
              fldLinkSingle: [
                {
                  id: 'recB',
                  name: 'B',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recF',
                  name: 'F',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats15',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats15/original',
                  size: 40932,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats15/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats15/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats15/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 147.08,
              fldEuros: 292.55,
            },
          },
          {
            id: 'recGordonGislason',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:30.000Z',
            cellValuesByFieldId: {
              fldName: 'Gordon Gislason',
              fldNotes:
                'Vesica a conspergo sollicito aut cupio vos. Quisquam sperno viduo decimus. Attonbitus vallum audeo aro congregatio stultus amplexus.',
              fldPhone: '(305) 708-2750 x5703',
              fldStatus: {
                id: 'selDone',
                name: 'Done',
                color: 'greenLight2',
              },
              fldStreetAddress: "2134 O'Keefe Junction",
              fldCity: 'South Verner',
              fldState: 'OR',
              fldMultipleOption: [
                {
                  id: 'selOptionA',
                  name: 'Option A',
                  color: 'blueLight2',
                },
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
              fldDate: '2023-06-02',
              fldDateWithTime: '2023-05-27T01:29:29.845Z',
              fldCheckbox: null,
              fldURL: 'https://dizzy-coffin.biz/',
              fldIntegerNumber: 16,
              fldDecimalNumber: 12.303057918325067,
              fldPercentage: 0.48495401395484805,
              fldDuration: 20409,
              fldRating: 1,
              fldLinkSingle: [
                {
                  id: 'recJ',
                  name: 'J',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats16',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats16/original',
                  size: 49293,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats16/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats16/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats16/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 451.85,
              fldEuros: 546.3,
            },
          },
          {
            id: 'recMsJaniceHomeni',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:30.000Z',
            cellValuesByFieldId: {
              fldName: 'Ms. Janice Homenick',
              fldNotes:
                'Tutamen natus caterva vicinus torqueo. Soleo venustas administratio attonbitus cometes audax collum officiis. Suscipit absorbeo tondeo arcus vorago.',
              fldPhone: '1-801-282-3664',
              fldStatus: {
                id: 'selTodo',
                name: 'Todo',
                color: 'redLight2',
              },
              fldStreetAddress: '989 Marks Rapids',
              fldCity: 'Eden Prairie',
              fldState: 'SD',
              fldMultipleOption: [
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
              ],
              fldDate: '2023-06-01',
              fldDateWithTime: '2024-12-26T08:32:06.623Z',
              fldCheckbox: true,
              fldURL: 'https://aromatic-butcher.biz/',
              fldIntegerNumber: 66,
              fldDecimalNumber: 14.201928116381168,
              fldPercentage: 0.36346784769557416,
              fldDuration: 29589,
              fldRating: 4,
              fldLinkSingle: [
                {
                  id: 'recI',
                  name: 'I',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats17',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats17/original',
                  size: 37179,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats17/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats17/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats17/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 910.26,
              fldEuros: 579.13,
            },
          },
          {
            id: 'recCarolynWillms',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:30.000Z',
            cellValuesByFieldId: {
              fldName: 'Carolyn Willms',
              fldNotes:
                'Arbor color communis. Sustineo conforto turbo curso tum appello sui tui. Utroque bos convoco confero condico confido pel atrox vita.',
              fldPhone: '599.369.3347 x67746',
              fldStatus: {
                id: 'selTodo',
                name: 'Todo',
                color: 'redLight2',
              },
              fldStreetAddress: '188 Bode Village',
              fldCity: 'Richardson',
              fldState: 'ID',
              fldMultipleOption: null,
              fldDate: '2023-05-08',
              fldDateWithTime: '2024-01-23T13:42:13.938Z',
              fldCheckbox: true,
              fldURL: 'https://essential-check.biz',
              fldIntegerNumber: 8,
              fldDecimalNumber: 32.68581635784358,
              fldPercentage: 0.1862937395926565,
              fldDuration: 54986,
              fldRating: null,
              fldLinkSingle: [
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats18',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats18/original',
                  size: 41932,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats18/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats18/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats18/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 122.94,
              fldEuros: 275.62,
            },
          },
          {
            id: 'recMarianHettinge',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:31.000Z',
            cellValuesByFieldId: {
              fldName: 'Marian Hettinger',
              fldNotes:
                'Curiositas demo vitae despecto rerum ubi custodia creptio urbs volubilis. Tondeo absens cuius solitudo quaerat video thalassinus. Architecto defero totam non volutabrum desidero defetiscor dolores.',
              fldPhone: '708.910.8686 x965',
              fldStatus: {
                id: 'selDone',
                name: 'Done',
                color: 'greenLight2',
              },
              fldStreetAddress: '857 New Road',
              fldCity: 'South Ericfurt',
              fldState: 'PA',
              fldMultipleOption: null,
              fldDate: '2024-02-10',
              fldDateWithTime: '2023-09-29T04:30:59.051Z',
              fldCheckbox: null,
              fldURL: 'https://awful-signet.info',
              fldIntegerNumber: 96,
              fldDecimalNumber: 91.47007754072547,
              fldPercentage: 0.18370376084931195,
              fldDuration: 3835,
              fldRating: 1,
              fldLinkSingle: [
                {
                  id: 'recG',
                  name: 'G',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats19',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats19/original',
                  size: 49293,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats19/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats19/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats19/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 614.54,
              fldEuros: 203.35,
            },
          },
          {
            id: 'recClaudeKoelpin',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:31.000Z',
            cellValuesByFieldId: {
              fldName: 'Claude Koelpin',
              fldNotes:
                'Tardus creo tamisium fugiat enim vulticulus velum vulnus. Torqueo ubi hic theca angelus dedecor amplus coniecto auctor attero. Degusto alveus vinco adfectus absum suspendo tempus.',
              fldPhone: '839-738-6767 x111',
              fldStatus: {
                id: 'selTodo',
                name: 'Todo',
                color: 'redLight2',
              },
              fldStreetAddress: '76013 S Broad Street',
              fldCity: 'Ebertworth',
              fldState: 'TN',
              fldMultipleOption: [
                {
                  id: 'selOptionA',
                  name: 'Option A',
                  color: 'blueLight2',
                },
              ],
              fldDate: '2023-06-10',
              fldDateWithTime: '2023-11-22T02:41:49.692Z',
              fldCheckbox: null,
              fldURL: 'https://intrepid-deposition.name',
              fldIntegerNumber: 54,
              fldDecimalNumber: 21.751868166029453,
              fldPercentage: 0.04510621237568557,
              fldDuration: 32229,
              fldRating: 4,
              fldLinkSingle: [
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recF',
                  name: 'F',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats20',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats20/original',
                  size: 36210,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats20/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats20/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats20/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 204.58,
              fldEuros: 69.63,
            },
          },
          {
            id: 'recAdamBechtelar',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:32.000Z',
            cellValuesByFieldId: {
              fldName: 'Adam Bechtelar',
              fldNotes:
                'Pectus audacia celo. Testimonium vestrum crebro. Sumptus arbitro capitulus corrumpo cattus.',
              fldPhone: '1-668-664-6750 x81729',
              fldStatus: {
                id: 'selDone',
                name: 'Done',
                color: 'greenLight2',
              },
              fldStreetAddress: '7846 Emie Forest',
              fldCity: 'Concord',
              fldState: 'UT',
              fldMultipleOption: [
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
              fldDate: '2023-06-29',
              fldDateWithTime: '2024-04-02T07:28:36.045Z',
              fldCheckbox: true,
              fldURL: 'https://weary-energy.org/',
              fldIntegerNumber: 8,
              fldDecimalNumber: 52.11151004768908,
              fldPercentage: 0.4650424674618989,
              fldDuration: 17863,
              fldRating: 5,
              fldLinkSingle: [
                {
                  id: 'recD',
                  name: 'D',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats21',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats21/original',
                  size: 40932,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats21/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats21/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats21/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 153.28,
              fldEuros: 310.47,
            },
          },
          {
            id: 'recRomanHammes',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:32.000Z',
            cellValuesByFieldId: {
              fldName: 'Roman Hammes',
              fldNotes:
                'Soleo aut adinventitias virtus conitor creator cogo alo. Tumultus tamquam absque deorsum facilis supra administratio volutabrum. Sponte adaugeo fugit textilis desidero unde.',
              fldPhone: '1-554-803-5806 x5591',
              fldStatus: {
                id: 'selTodo',
                name: 'Todo',
                color: 'redLight2',
              },
              fldStreetAddress: '2353 Isaiah Isle',
              fldCity: 'Lake Kody',
              fldState: 'NY',
              fldMultipleOption: [
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
              fldDate: '2023-10-04',
              fldDateWithTime: '2024-02-09T22:19:18.680Z',
              fldCheckbox: null,
              fldURL: 'https://vital-leopard.biz/',
              fldIntegerNumber: 36,
              fldDecimalNumber: 89.38144997227937,
              fldPercentage: 0.2768300778698176,
              fldDuration: 17566,
              fldRating: 4,
              fldLinkSingle: [
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats22',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats22/original',
                  size: 29903,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats22/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats22/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats22/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 523.51,
              fldEuros: 486.03,
            },
          },
          {
            id: 'recHowardBahringe',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:33.000Z',
            cellValuesByFieldId: {
              fldName: 'Howard Bahringer',
              fldNotes:
                'Cunabula tenetur adficio perspiciatis cuius vallum et territo curvo vicissitudo. Tamquam adflicto tenetur. Fugit quae alii terga ipsam attollo vero bellicus adipisci suspendo.',
              fldPhone: '259.743.6047 x47245',
              fldStatus: {
                id: 'selDone',
                name: 'Done',
                color: 'greenLight2',
              },
              fldStreetAddress: '8989 Towne Neck',
              fldCity: 'New Annamarieland',
              fldState: 'SC',
              fldMultipleOption: null,
              fldDate: '2023-12-26',
              fldDateWithTime: '2023-11-30T02:16:05.637Z',
              fldCheckbox: true,
              fldURL: 'https://daring-forestry.com/',
              fldIntegerNumber: 28,
              fldDecimalNumber: 69.7254499187693,
              fldPercentage: 0.23719803569838405,
              fldDuration: 78293,
              fldRating: null,
              fldLinkSingle: [
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recF',
                  name: 'F',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats23',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats23/original',
                  size: 62796,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats23/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats23/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats23/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 408.31,
              fldEuros: 60.13,
            },
          },
          {
            id: 'recAgnesRutherfor',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:33.000Z',
            cellValuesByFieldId: {
              fldName: 'Agnes Rutherford',
              fldNotes:
                'Eveniet adulescens antepono virga. Auctor comedo verbera charisma demo civitas error aperio deorsum. Apud commodo corona beatae abbas ademptio derideo amplus.',
              fldPhone: '523.796.6328 x47574',
              fldStatus: {
                id: 'selInProgress',
                name: 'In progress',
                color: 'yellowLight2',
              },
              fldStreetAddress: '420 Jordan Trafficway',
              fldCity: 'Breitenbergside',
              fldState: 'CT',
              fldMultipleOption: [
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
              fldDate: '2024-02-16',
              fldDateWithTime: '2024-11-18T00:54:35.875Z',
              fldCheckbox: null,
              fldURL: 'https://even-capability.info',
              fldIntegerNumber: 26,
              fldDecimalNumber: 38.50275541190058,
              fldPercentage: 0.27674055960960686,
              fldDuration: 58588,
              fldRating: 1,
              fldLinkSingle: [
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recF',
                  name: 'F',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats24',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats24/original',
                  size: 37355,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats24/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats24/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats24/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 330.56,
              fldEuros: 319.86,
            },
          },
          {
            id: 'recDebbieGoldner',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:33.000Z',
            cellValuesByFieldId: {
              fldName: 'Debbie Goldner',
              fldNotes:
                'Adstringo ambitus crudelis. Nemo compello clibanus ago valens censura vir catena temporibus. Varietas sophismata aperiam terra bene amplus.',
              fldPhone: '(472) 638-1711 x050',
              fldStatus: {
                id: 'selTodo',
                name: 'Todo',
                color: 'redLight2',
              },
              fldStreetAddress: '464 Kunze Burg',
              fldCity: 'Gleichnerview',
              fldState: 'AL',
              fldMultipleOption: [
                {
                  id: 'selOptionA',
                  name: 'Option A',
                  color: 'blueLight2',
                },
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
              ],
              fldDate: '2023-05-07',
              fldDateWithTime: '2024-03-25T16:29:28.211Z',
              fldCheckbox: true,
              fldURL: 'https://definite-liver.org',
              fldIntegerNumber: 27,
              fldDecimalNumber: 29.480539611540735,
              fldPercentage: 0.42285387124866247,
              fldDuration: 67102,
              fldRating: 4,
              fldLinkSingle: [
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats25',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats25/original',
                  size: 32306,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats25/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats25/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats25/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 521.7,
              fldEuros: 147.23,
            },
          },
          {
            id: 'recCristinaFahey',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:34.000Z',
            cellValuesByFieldId: {
              fldName: 'Cristina Fahey',
              fldNotes:
                'Carmen sui depulso. Crastinus carcer tergiversatio cubicularis vox quibusdam currus annus. Delectus adhaero utroque alii.',
              fldPhone: '223-465-5133 x44176',
              fldStatus: {
                id: 'selDone',
                name: 'Done',
                color: 'greenLight2',
              },
              fldStreetAddress: '6658 Lindgren Falls',
              fldCity: 'Lewfort',
              fldState: 'KY',
              fldMultipleOption: [
                {
                  id: 'selOptionA',
                  name: 'Option A',
                  color: 'blueLight2',
                },
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
              fldDate: '2023-11-18',
              fldDateWithTime: '2023-10-05T00:10:20.814Z',
              fldCheckbox: null,
              fldURL: 'https://fake-transfer.com/',
              fldIntegerNumber: 9,
              fldDecimalNumber: 51.33271077647805,
              fldPercentage: 0.6986595767084509,
              fldDuration: 7116,
              fldRating: 5,
              fldLinkSingle: [
                {
                  id: 'recD',
                  name: 'D',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recF',
                  name: 'F',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats26',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats26/original',
                  size: 40932,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats26/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats26/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats26/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 108.71,
              fldEuros: 533.73,
            },
          },
          {
            id: 'recRaymondAbernat',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:34.000Z',
            cellValuesByFieldId: {
              fldName: 'Raymond Abernathy DDS',
              fldNotes:
                'Laboriosam adamo ventosus somnus copiose una. Contego nam tui aegrus ara cuppedia nobis deficio advoco. Quasi animus maiores cinis charisma culpa tamisium caterva pauci.',
              fldPhone: '1-898-459-4307 x59383',
              fldStatus: {
                id: 'selInProgress',
                name: 'In progress',
                color: 'yellowLight2',
              },
              fldStreetAddress: "7978 St John's Road",
              fldCity: 'Hutchinson',
              fldState: 'PA',
              fldMultipleOption: [
                {
                  id: 'selOptionA',
                  name: 'Option A',
                  color: 'blueLight2',
                },
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
              ],
              fldDate: '2023-06-18',
              fldDateWithTime: '2023-05-24T04:46:44.273Z',
              fldCheckbox: null,
              fldURL: 'https://massive-oatmeal.com',
              fldIntegerNumber: 3,
              fldDecimalNumber: 42.9120798362419,
              fldPercentage: 0.3357298008631915,
              fldDuration: 84917,
              fldRating: 5,
              fldLinkSingle: [
                {
                  id: 'recJ',
                  name: 'J',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recE',
                  name: 'E',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats27',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats27/original',
                  size: 74621,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats27/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats27/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats27/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 897.1,
              fldEuros: 282.21,
            },
          },
          {
            id: 'recDrHollyHodkiew',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:35.000Z',
            cellValuesByFieldId: {
              fldName: 'Dr. Holly Hodkiewicz',
              fldNotes:
                'Texo crustulum antea depromo vinco stella civis. Paulatim tamen certe nihil pauper undique confero commemoro deduco. Sum crepusculum verbera degusto peccatus crastinus.',
              fldPhone: '(986) 223-8582 x4119',
              fldStatus: {
                id: 'selTodo',
                name: 'Todo',
                color: 'redLight2',
              },
              fldStreetAddress: '11893 Powlowski Mission',
              fldCity: 'Sarasota',
              fldState: 'ND',
              fldMultipleOption: [
                {
                  id: 'selOptionA',
                  name: 'Option A',
                  color: 'blueLight2',
                },
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
              fldDate: '2023-09-03',
              fldDateWithTime: '2023-10-08T00:52:49.633Z',
              fldCheckbox: null,
              fldURL: 'https://elated-sector.biz/',
              fldIntegerNumber: 13,
              fldDecimalNumber: 23.25757434591651,
              fldPercentage: 0.06549596460536122,
              fldDuration: 25999,
              fldRating: 1,
              fldLinkSingle: [
                {
                  id: 'recD',
                  name: 'D',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats28',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats28/original',
                  size: 40932,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats28/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats28/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats28/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 93.46,
              fldEuros: 387.35,
            },
          },
          {
            id: 'recReginaldRunolf',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:35.000Z',
            cellValuesByFieldId: {
              fldName: 'Reginald Runolfsson',
              fldNotes:
                'Vox mollitia aequitas. Modi decerno trepide. Crebro ultra depopulo necessitatibus quae.',
              fldPhone: '1-828-433-4213 x248',
              fldStatus: {
                id: 'selInProgress',
                name: 'In progress',
                color: 'yellowLight2',
              },
              fldStreetAddress: '2401 Elyssa Landing',
              fldCity: 'South Jalonside',
              fldState: 'VA',
              fldMultipleOption: [
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
              ],
              fldDate: '2024-01-03',
              fldDateWithTime: '2024-06-20T06:15:44.056Z',
              fldCheckbox: null,
              fldURL: 'https://grandiose-tug.name',
              fldIntegerNumber: 38,
              fldDecimalNumber: 62.866542185656726,
              fldPercentage: 0.1349824983626604,
              fldDuration: 69278,
              fldRating: null,
              fldLinkSingle: [
                {
                  id: 'recH',
                  name: 'H',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recF',
                  name: 'F',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats29',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats29/original',
                  size: 102100,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats29/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats29/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats29/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 765.17,
              fldEuros: 660.14,
            },
          },
          {
            id: 'recDrGregoryPfann',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:36.000Z',
            cellValuesByFieldId: {
              fldName: 'Dr. Gregory Pfannerstill',
              fldNotes:
                'Vulgo copia sodalitas. Decipio labore bestia ex aperiam rem. Tutis contabesco tantillus catena caste terreo.',
              fldPhone: '1-815-722-9603 x13416',
              fldStatus: {
                id: 'selTodo',
                name: 'Todo',
                color: 'redLight2',
              },
              fldStreetAddress: '87920 Parisian Fort',
              fldCity: 'Heavenborough',
              fldState: 'ID',
              fldMultipleOption: [
                {
                  id: 'selOptionA',
                  name: 'Option A',
                  color: 'blueLight2',
                },
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
              fldDate: '2024-04-06',
              fldDateWithTime: '2023-12-29T06:02:13.222Z',
              fldCheckbox: null,
              fldURL: 'https://somber-subway.org/',
              fldIntegerNumber: 8,
              fldDecimalNumber: 54.28819127846509,
              fldPercentage: 0.2862661730032414,
              fldDuration: 35067,
              fldRating: null,
              fldLinkSingle: [
                {
                  id: 'recF',
                  name: 'F',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recF',
                  name: 'F',
                },
                {
                  id: 'recG',
                  name: 'G',
                },
                {
                  id: 'recH',
                  name: 'H',
                },
                {
                  id: 'recI',
                  name: 'I',
                },
                {
                  id: 'recJ',
                  name: 'J',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats30',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats30/original',
                  size: 36210,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats30/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats30/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats30/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 573.54,
              fldEuros: 968.42,
            },
          },
          {
            id: 'recHenriettaKohle',
            commentCount: 0,
            createdTime: '2024-04-30T22:45:36.000Z',
            cellValuesByFieldId: {
              fldName: 'Henrietta Kohler Sr.',
              fldNotes:
                'Balbus antiquus conculco comprehendo vita trepide temperantia urbs id beatae. Usque universe subiungo. Curiositas alo sum suppono stella pariatur at a.',
              fldPhone: '1-514-282-1073',
              fldStatus: {
                id: 'selInProgress',
                name: 'In progress',
                color: 'yellowLight2',
              },
              fldStreetAddress: '208 Shemar Points',
              fldCity: 'Santa Monica',
              fldState: 'WI',
              fldMultipleOption: [
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
              ],
              fldDate: '2023-12-16',
              fldDateWithTime: '2024-02-22T09:07:44.925Z',
              fldCheckbox: true,
              fldURL: 'https://anxious-reaction.org',
              fldIntegerNumber: 27,
              fldDecimalNumber: 41.68098897207528,
              fldPercentage: 0.42105839075520635,
              fldDuration: 35073,
              fldRating: 4,
              fldLinkSingle: [
                {
                  id: 'recK',
                  name: 'K',
                },
              ],
              fldLinkMultiple: [
                {
                  id: 'recRecordA',
                  name: 'Record A',
                },
                {
                  id: 'recRecordB',
                  name: 'Record B',
                },
                {
                  id: 'recRecordC',
                  name: 'Record C',
                },
                {
                  id: 'recB',
                  name: 'B',
                },
                {
                  id: 'recC',
                  name: 'C',
                },
                {
                  id: 'recD',
                  name: 'D',
                },
                {
                  id: 'recF',
                  name: 'F',
                },
              ],
              fldAttachments: [
                {
                  id: 'attcats31',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats31/original',
                  size: 41932,
                  type: 'image/jpeg',
                  thumbnails: {
                    small: {
                      url: 'https://dl.airtable.test/attcats31/small',
                      width: 48,
                      height: 36,
                    },
                    large: {
                      url: 'https://dl.airtable.test/attcats31/large',
                      width: 640,
                      height: 480,
                    },
                    full: {
                      url: 'https://dl.airtable.test/attcats31/full',
                      width: 640,
                      height: 480,
                    },
                  },
                },
              ],
              fldDollars: 85.07,
              fldEuros: 507.04,
            },
          },
        ],
      },
      {
        id: 'tblTableB',
        name: 'Table B',
        description: '',
        fields: [
          {
            id: 'fldName2',
            name: 'Name',
            description: '',
            type: FieldType.SINGLE_LINE_TEXT,
            options: null,
          },
          {
            id: 'fldTableA',
            name: 'Table A',
            description: '',
            type: FieldType.MULTIPLE_RECORD_LINKS,
            options: {
              linkedTableId: 'tblTableA',
              isReversed: false,
              prefersSingleRecordLink: false,
              inverseLinkFieldId: 'fldLinkSingle',
              viewIdForRecordSelection: undefined,
            },
          },
          {
            id: 'fldTableA2',
            name: 'Table A 2',
            description: '',
            type: FieldType.MULTIPLE_RECORD_LINKS,
            options: {
              linkedTableId: 'tblTableA',
              isReversed: false,
              prefersSingleRecordLink: false,
              inverseLinkFieldId: 'fldLinkMultiple',
              viewIdForRecordSelection: undefined,
            },
          },
        ],
        views: [
          {
            id: 'viwGridView',
            name: 'Grid view',
            type: ViewType.GRID,
            fieldOrder: {
              fieldIds: ['fldName2', 'fldTableA', 'fldTableA2'],
              visibleFieldCount: 3,
            },
            records: [
              {
                id: 'recRecordA',
                color: null,
              },
              {
                id: 'recRecordB',
                color: null,
              },
              {
                id: 'recRecordC',
                color: null,
              },
              {
                id: 'recB',
                color: null,
              },
              {
                id: 'recC',
                color: null,
              },
              {
                id: 'recD',
                color: null,
              },
              {
                id: 'recE',
                color: null,
              },
              {
                id: 'recF',
                color: null,
              },
              {
                id: 'recG',
                color: null,
              },
              {
                id: 'recH',
                color: null,
              },
              {
                id: 'recI',
                color: null,
              },
              {
                id: 'recJ',
                color: null,
              },
              {
                id: 'recK',
                color: null,
              },
            ],
          },
        ],
        records: [
          {
            id: 'recRecordA',
            commentCount: 0,
            createdTime: '2024-02-09T15:08:05.000Z',
            cellValuesByFieldId: {
              fldName2: 'Record A',
              fldTableA: [
                {
                  id: 'recMrErikSchuppe',
                  name: 'Mr. Erik Schuppe',
                },
              ],
              fldTableA2: [
                {
                  id: 'recLatoyaMurray',
                  name: 'Latoya Murray',
                },
                {
                  id: 'recMrErikSchuppe',
                  name: 'Mr. Erik Schuppe',
                },
                {
                  id: 'recCeliaRau',
                  name: 'Celia Rau',
                },
                {
                  id: 'recDrWilbertLarki',
                  name: 'Dr. Wilbert Larkin',
                },
                {
                  id: 'recGordonGislason',
                  name: 'Gordon Gislason',
                },
                {
                  id: 'recMarianHettinge',
                  name: 'Marian Hettinger',
                },
                {
                  id: 'recClaudeKoelpin',
                  name: 'Claude Koelpin',
                },
                {
                  id: 'recAdamBechtelar',
                  name: 'Adam Bechtelar',
                },
                {
                  id: 'recRomanHammes',
                  name: 'Roman Hammes',
                },
                {
                  id: 'recHowardBahringe',
                  name: 'Howard Bahringer',
                },
                {
                  id: 'recAgnesRutherfor',
                  name: 'Agnes Rutherford',
                },
                {
                  id: 'recCristinaFahey',
                  name: 'Cristina Fahey',
                },
                {
                  id: 'recReginaldRunolf',
                  name: 'Reginald Runolfsson',
                },
                {
                  id: 'recDrGregoryPfann',
                  name: 'Dr. Gregory Pfannerstill',
                },
                {
                  id: 'recHenriettaKohle',
                  name: 'Henrietta Kohler Sr.',
                },
              ],
            },
          },
          {
            id: 'recRecordB',
            commentCount: 0,
            createdTime: '2024-02-09T15:08:05.000Z',
            cellValuesByFieldId: {
              fldName2: 'Record B',
              fldTableA: [
                {
                  id: 'recVeraVonRueden',
                  name: 'Vera VonRueden',
                },
                {
                  id: 'recCeliaRau',
                  name: 'Celia Rau',
                },
                {
                  id: 'recCarolynWillms',
                  name: 'Carolyn Willms',
                },
                {
                  id: 'recDebbieGoldner',
                  name: 'Debbie Goldner',
                },
              ],
              fldTableA2: [
                {
                  id: 'recVeraVonRueden',
                  name: 'Vera VonRueden',
                },
                {
                  id: 'recLulaBins',
                  name: 'Lula Bins',
                },
                {
                  id: 'recTerryWalker',
                  name: 'Terry Walker',
                },
                {
                  id: 'recVictoriaTurner',
                  name: 'Victoria Turner',
                },
                {
                  id: 'recDrWilbertLarki',
                  name: 'Dr. Wilbert Larkin',
                },
                {
                  id: 'recMsJaniceHomeni',
                  name: 'Ms. Janice Homenick',
                },
                {
                  id: 'recCarolynWillms',
                  name: 'Carolyn Willms',
                },
                {
                  id: 'recMarianHettinge',
                  name: 'Marian Hettinger',
                },
                {
                  id: 'recClaudeKoelpin',
                  name: 'Claude Koelpin',
                },
                {
                  id: 'recHowardBahringe',
                  name: 'Howard Bahringer',
                },
                {
                  id: 'recDebbieGoldner',
                  name: 'Debbie Goldner',
                },
                {
                  id: 'recRaymondAbernat',
                  name: 'Raymond Abernathy DDS',
                },
                {
                  id: 'recDrHollyHodkiew',
                  name: 'Dr. Holly Hodkiewicz',
                },
                {
                  id: 'recDrGregoryPfann',
                  name: 'Dr. Gregory Pfannerstill',
                },
                {
                  id: 'recHenriettaKohle',
                  name: 'Henrietta Kohler Sr.',
                },
              ],
            },
          },
          {
            id: 'recRecordC',
            commentCount: 0,
            createdTime: '2024-02-09T15:08:05.000Z',
            cellValuesByFieldId: {
              fldName2: 'Record C',
              fldTableA: [
                {
                  id: 'recPatrickWunsch',
                  name: 'Patrick Wunsch',
                },
                {
                  id: 'recRyanRogahn',
                  name: 'Ryan Rogahn',
                },
                {
                  id: 'recNoahReichelSch',
                  name: 'Noah Reichel-Schmeler',
                },
                {
                  id: 'recLatoyaMurray',
                  name: 'Latoya Murray',
                },
                {
                  id: 'recJennaVon',
                  name: 'Jenna Von',
                },
                {
                  id: 'recLulaBins',
                  name: 'Lula Bins',
                },
                {
                  id: 'recTerryWalker',
                  name: 'Terry Walker',
                },
                {
                  id: 'recMonicaSchroede',
                  name: 'Monica Schroeder',
                },
                {
                  id: 'recDrLanceHeidenr',
                  name: 'Dr. Lance Heidenreich',
                },
                {
                  id: 'recClaudeKoelpin',
                  name: 'Claude Koelpin',
                },
                {
                  id: 'recRomanHammes',
                  name: 'Roman Hammes',
                },
                {
                  id: 'recHowardBahringe',
                  name: 'Howard Bahringer',
                },
              ],
              fldTableA2: [
                {
                  id: 'recVeraVonRueden',
                  name: 'Vera VonRueden',
                },
                {
                  id: 'recRyanRogahn',
                  name: 'Ryan Rogahn',
                },
                {
                  id: 'recLulaBins',
                  name: 'Lula Bins',
                },
                {
                  id: 'recVictoriaTurner',
                  name: 'Victoria Turner',
                },
                {
                  id: 'recDrLanceHeidenr',
                  name: 'Dr. Lance Heidenreich',
                },
                {
                  id: 'recMicheleAufderh',
                  name: 'Michele Aufderhar II',
                },
                {
                  id: 'recGordonGislason',
                  name: 'Gordon Gislason',
                },
                {
                  id: 'recMsJaniceHomeni',
                  name: 'Ms. Janice Homenick',
                },
                {
                  id: 'recCarolynWillms',
                  name: 'Carolyn Willms',
                },
                {
                  id: 'recMarianHettinge',
                  name: 'Marian Hettinger',
                },
                {
                  id: 'recAgnesRutherfor',
                  name: 'Agnes Rutherford',
                },
                {
                  id: 'recRaymondAbernat',
                  name: 'Raymond Abernathy DDS',
                },
                {
                  id: 'recDrHollyHodkiew',
                  name: 'Dr. Holly Hodkiewicz',
                },
                {
                  id: 'recReginaldRunolf',
                  name: 'Reginald Runolfsson',
                },
                {
                  id: 'recDrGregoryPfann',
                  name: 'Dr. Gregory Pfannerstill',
                },
                {
                  id: 'recHenriettaKohle',
                  name: 'Henrietta Kohler Sr.',
                },
              ],
            },
          },
          {
            id: 'recB',
            commentCount: 0,
            createdTime: '2024-04-30T22:33:25.000Z',
            cellValuesByFieldId: {
              fldName2: 'B',
              fldTableA: [
                {
                  id: 'recVeraVonRueden',
                  name: 'Vera VonRueden',
                },
                {
                  id: 'recLatoyaMurray',
                  name: 'Latoya Murray',
                },
                {
                  id: 'recLulaBins',
                  name: 'Lula Bins',
                },
                {
                  id: 'recCeliaRau',
                  name: 'Celia Rau',
                },
                {
                  id: 'recMonicaSchroede',
                  name: 'Monica Schroeder',
                },
                {
                  id: 'recUnnamed',
                  name: '',
                },
                {
                  id: 'recMicheleAufderh',
                  name: 'Michele Aufderhar II',
                },
              ],
              fldTableA2: [
                {
                  id: 'recVeraVonRueden',
                  name: 'Vera VonRueden',
                },
                {
                  id: 'recNoahReichelSch',
                  name: 'Noah Reichel-Schmeler',
                },
                {
                  id: 'recLatoyaMurray',
                  name: 'Latoya Murray',
                },
                {
                  id: 'recMrErikSchuppe',
                  name: 'Mr. Erik Schuppe',
                },
                {
                  id: 'recJennaVon',
                  name: 'Jenna Von',
                },
                {
                  id: 'recUnnamed',
                  name: '',
                },
                {
                  id: 'recMicheleAufderh',
                  name: 'Michele Aufderhar II',
                },
                {
                  id: 'recGordonGislason',
                  name: 'Gordon Gislason',
                },
                {
                  id: 'recCarolynWillms',
                  name: 'Carolyn Willms',
                },
                {
                  id: 'recHowardBahringe',
                  name: 'Howard Bahringer',
                },
                {
                  id: 'recCristinaFahey',
                  name: 'Cristina Fahey',
                },
                {
                  id: 'recRaymondAbernat',
                  name: 'Raymond Abernathy DDS',
                },
                {
                  id: 'recDrHollyHodkiew',
                  name: 'Dr. Holly Hodkiewicz',
                },
                {
                  id: 'recHenriettaKohle',
                  name: 'Henrietta Kohler Sr.',
                },
              ],
            },
          },
          {
            id: 'recC',
            commentCount: 0,
            createdTime: '2024-04-30T22:33:26.000Z',
            cellValuesByFieldId: {
              fldName2: 'C',
              fldTableA: [
                {
                  id: 'recVeraVonRueden',
                  name: 'Vera VonRueden',
                },
                {
                  id: 'recCeliaRau',
                  name: 'Celia Rau',
                },
              ],
              fldTableA2: [
                {
                  id: 'recPatrickWunsch',
                  name: 'Patrick Wunsch',
                },
                {
                  id: 'recVeraVonRueden',
                  name: 'Vera VonRueden',
                },
                {
                  id: 'recJennaVon',
                  name: 'Jenna Von',
                },
                {
                  id: 'recLulaBins',
                  name: 'Lula Bins',
                },
                {
                  id: 'recVictoriaTurner',
                  name: 'Victoria Turner',
                },
                {
                  id: 'recDrLanceHeidenr',
                  name: 'Dr. Lance Heidenreich',
                },
                {
                  id: 'recMicheleAufderh',
                  name: 'Michele Aufderhar II',
                },
                {
                  id: 'recGordonGislason',
                  name: 'Gordon Gislason',
                },
                {
                  id: 'recMsJaniceHomeni',
                  name: 'Ms. Janice Homenick',
                },
                {
                  id: 'recCarolynWillms',
                  name: 'Carolyn Willms',
                },
                {
                  id: 'recMarianHettinge',
                  name: 'Marian Hettinger',
                },
                {
                  id: 'recAgnesRutherfor',
                  name: 'Agnes Rutherford',
                },
                {
                  id: 'recCristinaFahey',
                  name: 'Cristina Fahey',
                },
                {
                  id: 'recRaymondAbernat',
                  name: 'Raymond Abernathy DDS',
                },
                {
                  id: 'recReginaldRunolf',
                  name: 'Reginald Runolfsson',
                },
                {
                  id: 'recDrGregoryPfann',
                  name: 'Dr. Gregory Pfannerstill',
                },
                {
                  id: 'recHenriettaKohle',
                  name: 'Henrietta Kohler Sr.',
                },
              ],
            },
          },
          {
            id: 'recD',
            commentCount: 0,
            createdTime: '2024-04-30T22:33:26.000Z',
            cellValuesByFieldId: {
              fldName2: 'D',
              fldTableA: [
                {
                  id: 'recPatrickWunsch',
                  name: 'Patrick Wunsch',
                },
                {
                  id: 'recRyanRogahn',
                  name: 'Ryan Rogahn',
                },
                {
                  id: 'recLatoyaMurray',
                  name: 'Latoya Murray',
                },
                {
                  id: 'recMrErikSchuppe',
                  name: 'Mr. Erik Schuppe',
                },
                {
                  id: 'recCeliaRau',
                  name: 'Celia Rau',
                },
                {
                  id: 'recMonicaSchroede',
                  name: 'Monica Schroeder',
                },
                {
                  id: 'recAdamBechtelar',
                  name: 'Adam Bechtelar',
                },
                {
                  id: 'recCristinaFahey',
                  name: 'Cristina Fahey',
                },
                {
                  id: 'recDrHollyHodkiew',
                  name: 'Dr. Holly Hodkiewicz',
                },
              ],
              fldTableA2: [
                {
                  id: 'recPatrickWunsch',
                  name: 'Patrick Wunsch',
                },
                {
                  id: 'recVeraVonRueden',
                  name: 'Vera VonRueden',
                },
                {
                  id: 'recRyanRogahn',
                  name: 'Ryan Rogahn',
                },
                {
                  id: 'recLatoyaMurray',
                  name: 'Latoya Murray',
                },
                {
                  id: 'recJennaVon',
                  name: 'Jenna Von',
                },
                {
                  id: 'recTerryWalker',
                  name: 'Terry Walker',
                },
                {
                  id: 'recUnnamed',
                  name: '',
                },
                {
                  id: 'recVictoriaTurner',
                  name: 'Victoria Turner',
                },
                {
                  id: 'recGordonGislason',
                  name: 'Gordon Gislason',
                },
                {
                  id: 'recCarolynWillms',
                  name: 'Carolyn Willms',
                },
                {
                  id: 'recAdamBechtelar',
                  name: 'Adam Bechtelar',
                },
                {
                  id: 'recHowardBahringe',
                  name: 'Howard Bahringer',
                },
                {
                  id: 'recAgnesRutherfor',
                  name: 'Agnes Rutherford',
                },
                {
                  id: 'recDebbieGoldner',
                  name: 'Debbie Goldner',
                },
                {
                  id: 'recCristinaFahey',
                  name: 'Cristina Fahey',
                },
                {
                  id: 'recDrHollyHodkiew',
                  name: 'Dr. Holly Hodkiewicz',
                },
                {
                  id: 'recDrGregoryPfann',
                  name: 'Dr. Gregory Pfannerstill',
                },
                {
                  id: 'recHenriettaKohle',
                  name: 'Henrietta Kohler Sr.',
                },
              ],
            },
          },
          {
            id: 'recE',
            commentCount: 0,
            createdTime: '2024-04-30T22:33:26.000Z',
            cellValuesByFieldId: {
              fldName2: 'E',
              fldTableA: [
                {
                  id: 'recVeraVonRueden',
                  name: 'Vera VonRueden',
                },
                {
                  id: 'recLatoyaMurray',
                  name: 'Latoya Murray',
                },
                {
                  id: 'recMrErikSchuppe',
                  name: 'Mr. Erik Schuppe',
                },
                {
                  id: 'recLulaBins',
                  name: 'Lula Bins',
                },
                {
                  id: 'recTerryWalker',
                  name: 'Terry Walker',
                },
                {
                  id: 'recUnnamed',
                  name: '',
                },
              ],
              fldTableA2: [
                {
                  id: 'recPatrickWunsch',
                  name: 'Patrick Wunsch',
                },
                {
                  id: 'recVeraVonRueden',
                  name: 'Vera VonRueden',
                },
                {
                  id: 'recRyanRogahn',
                  name: 'Ryan Rogahn',
                },
                {
                  id: 'recLatoyaMurray',
                  name: 'Latoya Murray',
                },
                {
                  id: 'recMrErikSchuppe',
                  name: 'Mr. Erik Schuppe',
                },
                {
                  id: 'recLulaBins',
                  name: 'Lula Bins',
                },
                {
                  id: 'recTerryWalker',
                  name: 'Terry Walker',
                },
                {
                  id: 'recCeliaRau',
                  name: 'Celia Rau',
                },
                {
                  id: 'recUnnamed',
                  name: '',
                },
                {
                  id: 'recDrLanceHeidenr',
                  name: 'Dr. Lance Heidenreich',
                },
                {
                  id: 'recGordonGislason',
                  name: 'Gordon Gislason',
                },
                {
                  id: 'recMsJaniceHomeni',
                  name: 'Ms. Janice Homenick',
                },
                {
                  id: 'recMarianHettinge',
                  name: 'Marian Hettinger',
                },
                {
                  id: 'recClaudeKoelpin',
                  name: 'Claude Koelpin',
                },
                {
                  id: 'recAgnesRutherfor',
                  name: 'Agnes Rutherford',
                },
                {
                  id: 'recDebbieGoldner',
                  name: 'Debbie Goldner',
                },
                {
                  id: 'recRaymondAbernat',
                  name: 'Raymond Abernathy DDS',
                },
              ],
            },
          },
          {
            id: 'recF',
            commentCount: 0,
            createdTime: '2024-04-30T22:33:27.000Z',
            cellValuesByFieldId: {
              fldName2: 'F',
              fldTableA: [
                {
                  id: 'recPatrickWunsch',
                  name: 'Patrick Wunsch',
                },
                {
                  id: 'recRyanRogahn',
                  name: 'Ryan Rogahn',
                },
                {
                  id: 'recDrGregoryPfann',
                  name: 'Dr. Gregory Pfannerstill',
                },
              ],
              fldTableA2: [
                {
                  id: 'recRyanRogahn',
                  name: 'Ryan Rogahn',
                },
                {
                  id: 'recLatoyaMurray',
                  name: 'Latoya Murray',
                },
                {
                  id: 'recLulaBins',
                  name: 'Lula Bins',
                },
                {
                  id: 'recCeliaRau',
                  name: 'Celia Rau',
                },
                {
                  id: 'recMonicaSchroede',
                  name: 'Monica Schroeder',
                },
                {
                  id: 'recVictoriaTurner',
                  name: 'Victoria Turner',
                },
                {
                  id: 'recMicheleAufderh',
                  name: 'Michele Aufderhar II',
                },
                {
                  id: 'recClaudeKoelpin',
                  name: 'Claude Koelpin',
                },
                {
                  id: 'recHowardBahringe',
                  name: 'Howard Bahringer',
                },
                {
                  id: 'recAgnesRutherfor',
                  name: 'Agnes Rutherford',
                },
                {
                  id: 'recCristinaFahey',
                  name: 'Cristina Fahey',
                },
                {
                  id: 'recReginaldRunolf',
                  name: 'Reginald Runolfsson',
                },
                {
                  id: 'recDrGregoryPfann',
                  name: 'Dr. Gregory Pfannerstill',
                },
                {
                  id: 'recHenriettaKohle',
                  name: 'Henrietta Kohler Sr.',
                },
              ],
            },
          },
          {
            id: 'recG',
            commentCount: 0,
            createdTime: '2024-04-30T22:33:27.000Z',
            cellValuesByFieldId: {
              fldName2: 'G',
              fldTableA: [
                {
                  id: 'recVeraVonRueden',
                  name: 'Vera VonRueden',
                },
                {
                  id: 'recNoahReichelSch',
                  name: 'Noah Reichel-Schmeler',
                },
                {
                  id: 'recJennaVon',
                  name: 'Jenna Von',
                },
                {
                  id: 'recTerryWalker',
                  name: 'Terry Walker',
                },
                {
                  id: 'recMonicaSchroede',
                  name: 'Monica Schroeder',
                },
                {
                  id: 'recUnnamed',
                  name: '',
                },
                {
                  id: 'recVictoriaTurner',
                  name: 'Victoria Turner',
                },
                {
                  id: 'recMarianHettinge',
                  name: 'Marian Hettinger',
                },
              ],
              fldTableA2: [
                {
                  id: 'recVeraVonRueden',
                  name: 'Vera VonRueden',
                },
                {
                  id: 'recNoahReichelSch',
                  name: 'Noah Reichel-Schmeler',
                },
                {
                  id: 'recMrErikSchuppe',
                  name: 'Mr. Erik Schuppe',
                },
                {
                  id: 'recJennaVon',
                  name: 'Jenna Von',
                },
                {
                  id: 'recLulaBins',
                  name: 'Lula Bins',
                },
                {
                  id: 'recTerryWalker',
                  name: 'Terry Walker',
                },
                {
                  id: 'recCeliaRau',
                  name: 'Celia Rau',
                },
                {
                  id: 'recMonicaSchroede',
                  name: 'Monica Schroeder',
                },
                {
                  id: 'recDrWilbertLarki',
                  name: 'Dr. Wilbert Larkin',
                },
                {
                  id: 'recMicheleAufderh',
                  name: 'Michele Aufderhar II',
                },
                {
                  id: 'recGordonGislason',
                  name: 'Gordon Gislason',
                },
                {
                  id: 'recClaudeKoelpin',
                  name: 'Claude Koelpin',
                },
                {
                  id: 'recHowardBahringe',
                  name: 'Howard Bahringer',
                },
                {
                  id: 'recDebbieGoldner',
                  name: 'Debbie Goldner',
                },
                {
                  id: 'recCristinaFahey',
                  name: 'Cristina Fahey',
                },
                {
                  id: 'recDrGregoryPfann',
                  name: 'Dr. Gregory Pfannerstill',
                },
              ],
            },
          },
          {
            id: 'recH',
            commentCount: 0,
            createdTime: '2024-04-30T22:33:28.000Z',
            cellValuesByFieldId: {
              fldName2: 'H',
              fldTableA: [
                {
                  id: 'recPatrickWunsch',
                  name: 'Patrick Wunsch',
                },
                {
                  id: 'recVeraVonRueden',
                  name: 'Vera VonRueden',
                },
                {
                  id: 'recMrErikSchuppe',
                  name: 'Mr. Erik Schuppe',
                },
                {
                  id: 'recReginaldRunolf',
                  name: 'Reginald Runolfsson',
                },
              ],
              fldTableA2: [
                {
                  id: 'recPatrickWunsch',
                  name: 'Patrick Wunsch',
                },
                {
                  id: 'recVeraVonRueden',
                  name: 'Vera VonRueden',
                },
                {
                  id: 'recNoahReichelSch',
                  name: 'Noah Reichel-Schmeler',
                },
                {
                  id: 'recLatoyaMurray',
                  name: 'Latoya Murray',
                },
                {
                  id: 'recMonicaSchroede',
                  name: 'Monica Schroeder',
                },
                {
                  id: 'recVictoriaTurner',
                  name: 'Victoria Turner',
                },
                {
                  id: 'recMicheleAufderh',
                  name: 'Michele Aufderhar II',
                },
                {
                  id: 'recGordonGislason',
                  name: 'Gordon Gislason',
                },
                {
                  id: 'recMsJaniceHomeni',
                  name: 'Ms. Janice Homenick',
                },
                {
                  id: 'recCarolynWillms',
                  name: 'Carolyn Willms',
                },
                {
                  id: 'recMarianHettinge',
                  name: 'Marian Hettinger',
                },
                {
                  id: 'recClaudeKoelpin',
                  name: 'Claude Koelpin',
                },
                {
                  id: 'recAdamBechtelar',
                  name: 'Adam Bechtelar',
                },
                {
                  id: 'recRomanHammes',
                  name: 'Roman Hammes',
                },
                {
                  id: 'recHowardBahringe',
                  name: 'Howard Bahringer',
                },
                {
                  id: 'recDrHollyHodkiew',
                  name: 'Dr. Holly Hodkiewicz',
                },
                {
                  id: 'recReginaldRunolf',
                  name: 'Reginald Runolfsson',
                },
                {
                  id: 'recDrGregoryPfann',
                  name: 'Dr. Gregory Pfannerstill',
                },
              ],
            },
          },
          {
            id: 'recI',
            commentCount: 0,
            createdTime: '2024-04-30T22:33:28.000Z',
            cellValuesByFieldId: {
              fldName2: 'I',
              fldTableA: [
                {
                  id: 'recPatrickWunsch',
                  name: 'Patrick Wunsch',
                },
                {
                  id: 'recRyanRogahn',
                  name: 'Ryan Rogahn',
                },
                {
                  id: 'recLatoyaMurray',
                  name: 'Latoya Murray',
                },
                {
                  id: 'recMrErikSchuppe',
                  name: 'Mr. Erik Schuppe',
                },
                {
                  id: 'recTerryWalker',
                  name: 'Terry Walker',
                },
                {
                  id: 'recMsJaniceHomeni',
                  name: 'Ms. Janice Homenick',
                },
              ],
              fldTableA2: [
                {
                  id: 'recRyanRogahn',
                  name: 'Ryan Rogahn',
                },
                {
                  id: 'recJennaVon',
                  name: 'Jenna Von',
                },
                {
                  id: 'recLulaBins',
                  name: 'Lula Bins',
                },
                {
                  id: 'recTerryWalker',
                  name: 'Terry Walker',
                },
                {
                  id: 'recMonicaSchroede',
                  name: 'Monica Schroeder',
                },
                {
                  id: 'recDrLanceHeidenr',
                  name: 'Dr. Lance Heidenreich',
                },
                {
                  id: 'recDrWilbertLarki',
                  name: 'Dr. Wilbert Larkin',
                },
                {
                  id: 'recGordonGislason',
                  name: 'Gordon Gislason',
                },
                {
                  id: 'recCarolynWillms',
                  name: 'Carolyn Willms',
                },
                {
                  id: 'recMarianHettinge',
                  name: 'Marian Hettinger',
                },
                {
                  id: 'recClaudeKoelpin',
                  name: 'Claude Koelpin',
                },
                {
                  id: 'recHowardBahringe',
                  name: 'Howard Bahringer',
                },
                {
                  id: 'recRaymondAbernat',
                  name: 'Raymond Abernathy DDS',
                },
                {
                  id: 'recDrHollyHodkiew',
                  name: 'Dr. Holly Hodkiewicz',
                },
                {
                  id: 'recReginaldRunolf',
                  name: 'Reginald Runolfsson',
                },
                {
                  id: 'recDrGregoryPfann',
                  name: 'Dr. Gregory Pfannerstill',
                },
              ],
            },
          },
          {
            id: 'recJ',
            commentCount: 0,
            createdTime: '2024-04-30T22:33:29.000Z',
            cellValuesByFieldId: {
              fldName2: 'J',
              fldTableA: [
                {
                  id: 'recPatrickWunsch',
                  name: 'Patrick Wunsch',
                },
                {
                  id: 'recNoahReichelSch',
                  name: 'Noah Reichel-Schmeler',
                },
                {
                  id: 'recLatoyaMurray',
                  name: 'Latoya Murray',
                },
                {
                  id: 'recTerryWalker',
                  name: 'Terry Walker',
                },
                {
                  id: 'recCeliaRau',
                  name: 'Celia Rau',
                },
                {
                  id: 'recMonicaSchroede',
                  name: 'Monica Schroeder',
                },
                {
                  id: 'recUnnamed',
                  name: '',
                },
                {
                  id: 'recGordonGislason',
                  name: 'Gordon Gislason',
                },
                {
                  id: 'recRaymondAbernat',
                  name: 'Raymond Abernathy DDS',
                },
              ],
              fldTableA2: [
                {
                  id: 'recRyanRogahn',
                  name: 'Ryan Rogahn',
                },
                {
                  id: 'recNoahReichelSch',
                  name: 'Noah Reichel-Schmeler',
                },
                {
                  id: 'recMrErikSchuppe',
                  name: 'Mr. Erik Schuppe',
                },
                {
                  id: 'recJennaVon',
                  name: 'Jenna Von',
                },
                {
                  id: 'recTerryWalker',
                  name: 'Terry Walker',
                },
                {
                  id: 'recCeliaRau',
                  name: 'Celia Rau',
                },
                {
                  id: 'recDrLanceHeidenr',
                  name: 'Dr. Lance Heidenreich',
                },
                {
                  id: 'recCarolynWillms',
                  name: 'Carolyn Willms',
                },
                {
                  id: 'recMarianHettinge',
                  name: 'Marian Hettinger',
                },
                {
                  id: 'recHowardBahringe',
                  name: 'Howard Bahringer',
                },
                {
                  id: 'recAgnesRutherfor',
                  name: 'Agnes Rutherford',
                },
                {
                  id: 'recDebbieGoldner',
                  name: 'Debbie Goldner',
                },
                {
                  id: 'recDrHollyHodkiew',
                  name: 'Dr. Holly Hodkiewicz',
                },
                {
                  id: 'recReginaldRunolf',
                  name: 'Reginald Runolfsson',
                },
                {
                  id: 'recDrGregoryPfann',
                  name: 'Dr. Gregory Pfannerstill',
                },
              ],
            },
          },
          {
            id: 'recK',
            commentCount: 0,
            createdTime: '2024-04-30T22:33:29.000Z',
            cellValuesByFieldId: {
              fldName2: 'K',
              fldTableA: [
                {
                  id: 'recRyanRogahn',
                  name: 'Ryan Rogahn',
                },
                {
                  id: 'recNoahReichelSch',
                  name: 'Noah Reichel-Schmeler',
                },
                {
                  id: 'recLatoyaMurray',
                  name: 'Latoya Murray',
                },
                {
                  id: 'recTerryWalker',
                  name: 'Terry Walker',
                },
                {
                  id: 'recCeliaRau',
                  name: 'Celia Rau',
                },
                {
                  id: 'recMonicaSchroede',
                  name: 'Monica Schroeder',
                },
                {
                  id: 'recDrWilbertLarki',
                  name: 'Dr. Wilbert Larkin',
                },
                {
                  id: 'recAgnesRutherfor',
                  name: 'Agnes Rutherford',
                },
                {
                  id: 'recHenriettaKohle',
                  name: 'Henrietta Kohler Sr.',
                },
              ],
              fldTableA2: [
                {
                  id: 'recVeraVonRueden',
                  name: 'Vera VonRueden',
                },
                {
                  id: 'recRyanRogahn',
                  name: 'Ryan Rogahn',
                },
                {
                  id: 'recNoahReichelSch',
                  name: 'Noah Reichel-Schmeler',
                },
                {
                  id: 'recJennaVon',
                  name: 'Jenna Von',
                },
                {
                  id: 'recMonicaSchroede',
                  name: 'Monica Schroeder',
                },
                {
                  id: 'recVictoriaTurner',
                  name: 'Victoria Turner',
                },
                {
                  id: 'recDrLanceHeidenr',
                  name: 'Dr. Lance Heidenreich',
                },
                {
                  id: 'recDrWilbertLarki',
                  name: 'Dr. Wilbert Larkin',
                },
                {
                  id: 'recGordonGislason',
                  name: 'Gordon Gislason',
                },
                {
                  id: 'recMarianHettinge',
                  name: 'Marian Hettinger',
                },
                {
                  id: 'recClaudeKoelpin',
                  name: 'Claude Koelpin',
                },
                {
                  id: 'recAdamBechtelar',
                  name: 'Adam Bechtelar',
                },
                {
                  id: 'recRomanHammes',
                  name: 'Roman Hammes',
                },
                {
                  id: 'recCristinaFahey',
                  name: 'Cristina Fahey',
                },
                {
                  id: 'recRaymondAbernat',
                  name: 'Raymond Abernathy DDS',
                },
                {
                  id: 'recReginaldRunolf',
                  name: 'Reginald Runolfsson',
                },
              ],
            },
          },
        ],
      },
    ],
    collaborators: [
      {
        id: 'usrJuanThompson',
        name: 'Juan Thompson',
        email: 'juan.thompson@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrJuanThompson',
        isActive: true,
      },
      {
        id: 'usrBettyGleason',
        name: 'Betty Gleason',
        email: 'betty.gleason@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrBettyGleason',
        isActive: true,
      },
      {
        id: 'usrAlbertaWisozk',
        name: 'Alberta Wisozk',
        email: 'alberta.wisozk@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrAlbertaWisozk',
        isActive: true,
      },
      {
        id: 'usrJeanTillman',
        name: 'Jean Tillman',
        email: 'jean.tillman@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrJeanTillman',
        isActive: true,
      },
      {
        id: 'usrMikeMiller',
        name: 'Mike Miller',
        email: 'mike.miller@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrMikeMiller',
        isActive: true,
      },
      {
        id: 'usrBonnieMoore',
        name: 'Bonnie Moore',
        email: 'bonnie.moore@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrBonnieMoore',
        isActive: true,
      },
      {
        id: 'usrYvonneRussel',
        name: 'Yvonne Russel',
        email: 'yvonne.russel@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrYvonneRussel',
        isActive: true,
      },
      {
        id: 'usrAmyProhaska',
        name: 'Amy Prohaska',
        email: 'amy.prohaska@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrAmyProhaska',
        isActive: true,
      },
      {
        id: 'usrJamieRosenbaum',
        name: 'Jamie Rosenbaum',
        email: 'jamie.rosenbaum@airtable.test',
        profilePicUrl:
          'https://dl.airtable.test/.profilePics/usrJamieRosenbaum',
        isActive: true,
      },
      {
        id: 'usrDeloresWard',
        name: 'Delores Ward',
        email: 'delores.ward@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrDeloresWard',
        isActive: true,
      },
      {
        id: 'usrLionelOsinski',
        name: 'Lionel Osinski',
        email: 'lionel.osinski@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrLionelOsinski',
        isActive: true,
      },
      {
        id: 'usrLuzMorissette',
        name: 'Luz Morissette',
        email: 'luz.morissette@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrLuzMorissette',
        isActive: true,
      },
      {
        id: 'usrHermanTrantow',
        name: 'Herman Trantow',
        email: 'herman.trantow@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrHermanTrantow',
        isActive: true,
      },
      {
        id: 'usrAliciaWalsh',
        name: 'Alicia Walsh',
        email: 'alicia.walsh@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrAliciaWalsh',
        isActive: true,
      },
      {
        id: 'usrJoyHilpert',
        name: 'Joy Hilpert',
        email: 'joy.hilpert@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrJoyHilpert',
        isActive: true,
      },
      {
        id: 'usrOrlandoFeil',
        name: 'Orlando Feil',
        email: 'orlando.feil@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrOrlandoFeil',
        isActive: true,
      },
      {
        id: 'usrJeffreyJaskols',
        name: 'Jeffrey Jaskolski',
        email: 'jeffrey.jaskolski@airtable.test',
        profilePicUrl:
          'https://dl.airtable.test/.profilePics/usrJeffreyJaskols',
        isActive: true,
      },
    ],
  },
}
