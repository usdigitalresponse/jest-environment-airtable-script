import { FieldType, ViewType } from '@airtable/blocks/models'

export default {
  base: {
    id: 'appJestAirta',
    name: 'Jest Airtable Script Environment',
    color: 'yellow',
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
            id: 'fldautoNumber',
            name: 'autoNumber',
            description: '',
            type: FieldType.AUTO_NUMBER,
            options: null,
          },
          {
            id: 'fldbarcode',
            name: 'barcode',
            description: '',
            type: FieldType.BARCODE,
            options: null,
          },
          {
            id: 'fldbutton',
            name: 'button',
            description: '',
            type: FieldType.BUTTON,
            options: null,
          },
          {
            id: 'fldcheckbox',
            name: 'checkbox',
            description: '',
            type: FieldType.CHECKBOX,
            options: {
              icon: 'check',
              color: 'greenBright',
            },
          },
          {
            id: 'fldmultipleRecord',
            name: 'multipleRecordLinks',
            description: '',
            type: FieldType.MULTIPLE_RECORD_LINKS,
            options: {
              linkedTableId: 'tblTableB',
              isReversed: false,
              prefersSingleRecordLink: false,
              inverseLinkFieldId: 'fldTableA',
              viewIdForRecordSelection: undefined,
            },
          },
          {
            id: 'fldcount',
            name: 'count',
            description: '',
            type: FieldType.COUNT,
            options: {
              isValid: true,
              recordLinkFieldId: 'fldmultipleRecord',
            },
          },
          {
            id: 'fldcreatedBy',
            name: 'createdBy',
            description: '',
            type: FieldType.CREATED_BY,
            options: {
              choices: [
                {
                  id: 'usrBettyGleason',
                  name: 'Betty Gleason',
                  email: 'betty.gleason@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrBettyGleason',
                },
                {
                  id: 'usrDeloresWard',
                  name: 'Delores Ward',
                  email: 'delores.ward@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrDeloresWard',
                },
                {
                  id: 'usrAmyProhaska',
                  name: 'Amy Prohaska',
                  email: 'amy.prohaska@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrAmyProhaska',
                },
                {
                  id: 'usrJeffreyJaskols',
                  name: 'Jeffrey Jaskolski',
                  email: 'jeffrey.jaskolski@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrJeffreyJaskols',
                },
                {
                  id: 'usrClaudeBoehm',
                  name: 'Claude Boehm',
                  email: 'claude.boehm@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrClaudeBoehm',
                },
                {
                  id: 'usrJuanThompson',
                  name: 'Juan Thompson',
                  email: 'juan.thompson@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrJuanThompson',
                },
                {
                  id: 'usrDevinCollier',
                  name: 'Devin Collier',
                  email: 'devin.collier@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrDevinCollier',
                },
              ],
            },
          },
          {
            id: 'fldcreatedTime',
            name: 'createdTime',
            description: '',
            type: FieldType.CREATED_TIME,
            options: {
              result: {
                type: 'dateTime',
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
            },
          },
          {
            id: 'fldcurrency',
            name: 'currency',
            description: '',
            type: FieldType.CURRENCY,
            options: {
              precision: 2,
              symbol: '$',
            },
          },
          {
            id: 'flddate',
            name: 'date',
            description: '',
            type: FieldType.DATE,
            options: {
              dateFormat: {
                name: 'friendly',
                format: 'LL',
              },
            },
          },
          {
            id: 'flddateTime',
            name: 'dateTime',
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
            id: 'fldduration',
            name: 'duration',
            description: '',
            type: FieldType.DURATION,
            options: {
              durationFormat: 'h:mm',
            },
          },
          {
            id: 'fldemail',
            name: 'email',
            description: '',
            type: FieldType.EMAIL,
            options: null,
          },
          {
            id: 'fldformula',
            name: 'formula',
            description: '',
            type: FieldType.FORMULA,
            options: {
              isValid: true,
              formula: '{fldMC4F8MqnSuI84v}',
              referencedFieldIds: ['fldName'],
              result: {
                type: 'singleLineText',
              },
            },
          },
          {
            id: 'fldlastModifiedBy',
            name: 'lastModifiedBy',
            description: '',
            type: FieldType.LAST_MODIFIED_BY,
            options: {
              referencedFieldIds: [],
              choices: [
                {
                  id: 'usrBettyGleason',
                  name: 'Betty Gleason',
                  email: 'betty.gleason@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrBettyGleason',
                },
                {
                  id: 'usrDeloresWard',
                  name: 'Delores Ward',
                  email: 'delores.ward@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrDeloresWard',
                },
                {
                  id: 'usrAmyProhaska',
                  name: 'Amy Prohaska',
                  email: 'amy.prohaska@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrAmyProhaska',
                },
                {
                  id: 'usrJeffreyJaskols',
                  name: 'Jeffrey Jaskolski',
                  email: 'jeffrey.jaskolski@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrJeffreyJaskols',
                },
                {
                  id: 'usrClaudeBoehm',
                  name: 'Claude Boehm',
                  email: 'claude.boehm@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrClaudeBoehm',
                },
                {
                  id: 'usrJuanThompson',
                  name: 'Juan Thompson',
                  email: 'juan.thompson@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrJuanThompson',
                },
                {
                  id: 'usrDevinCollier',
                  name: 'Devin Collier',
                  email: 'devin.collier@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrDevinCollier',
                },
              ],
            },
          },
          {
            id: 'fldlastModifiedTi',
            name: 'lastModifiedTime',
            description: '',
            type: FieldType.LAST_MODIFIED_TIME,
            options: {
              isValid: true,
              referencedFieldIds: [],
              result: {
                type: 'dateTime',
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
            },
          },
          {
            id: 'fldmultilineText',
            name: 'multilineText',
            description: '',
            type: FieldType.MULTILINE_TEXT,
            options: null,
          },
          {
            id: 'fldmultipleAttach',
            name: 'multipleAttachments',
            description: '',
            type: FieldType.MULTIPLE_ATTACHMENTS,
            options: {
              isReversed: false,
            },
          },
          {
            id: 'fldmultipleCollab',
            name: 'multipleCollaborators',
            description: '',
            type: FieldType.MULTIPLE_COLLABORATORS,
            options: {
              choices: [
                {
                  id: 'usrBettyGleason',
                  name: 'Betty Gleason',
                  email: 'betty.gleason@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrBettyGleason',
                },
                {
                  id: 'usrDeloresWard',
                  name: 'Delores Ward',
                  email: 'delores.ward@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrDeloresWard',
                },
                {
                  id: 'usrAmyProhaska',
                  name: 'Amy Prohaska',
                  email: 'amy.prohaska@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrAmyProhaska',
                },
                {
                  id: 'usrJeffreyJaskols',
                  name: 'Jeffrey Jaskolski',
                  email: 'jeffrey.jaskolski@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrJeffreyJaskols',
                },
                {
                  id: 'usrClaudeBoehm',
                  name: 'Claude Boehm',
                  email: 'claude.boehm@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrClaudeBoehm',
                },
                {
                  id: 'usrJuanThompson',
                  name: 'Juan Thompson',
                  email: 'juan.thompson@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrJuanThompson',
                },
                {
                  id: 'usrDevinCollier',
                  name: 'Devin Collier',
                  email: 'devin.collier@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrDevinCollier',
                },
              ],
            },
          },
          {
            id: 'fldmultipleLookup',
            name: 'multipleLookupValues',
            description: '',
            type: FieldType.MULTIPLE_LOOKUP_VALUES,
            options: {
              isValid: true,
              recordLinkFieldId: 'fldmultipleRecord',
              fieldIdInLinkedTable: 'fldName2',
              result: {
                type: 'singleLineText',
              },
            },
          },
          {
            id: 'fldmultipleSelect',
            name: 'multipleSelects',
            description: '',
            type: FieldType.MULTIPLE_SELECTS,
            options: {
              choices: [
                {
                  id: 'selA',
                  name: 'A',
                  color: 'blueLight2',
                },
                {
                  id: 'selB',
                  name: 'B',
                  color: 'cyanLight2',
                },
                {
                  id: 'selC',
                  name: 'C',
                  color: 'tealLight2',
                },
              ],
            },
          },
          {
            id: 'fldnumber',
            name: 'number',
            description: '',
            type: FieldType.NUMBER,
            options: {
              precision: 1,
            },
          },
          {
            id: 'fldpercent',
            name: 'percent',
            description: '',
            type: FieldType.PERCENT,
            options: {
              precision: 0,
            },
          },
          {
            id: 'fldphoneNumber',
            name: 'phoneNumber',
            description: '',
            type: FieldType.PHONE_NUMBER,
            options: null,
          },
          {
            id: 'fldrating',
            name: 'rating',
            description: '',
            type: FieldType.RATING,
            options: {
              icon: 'star',
              max: 5,
              color: 'yellowBright',
            },
          },
          {
            id: 'fldrichText',
            name: 'richText',
            description: '',
            type: FieldType.RICH_TEXT,
            options: null,
          },
          {
            id: 'fldrollup',
            name: 'rollup',
            description: '',
            type: FieldType.ROLLUP,
            options: {
              isValid: true,
              recordLinkFieldId: 'fldmultipleRecord',
              fieldIdInLinkedTable: 'fldName2',
              referencedFieldIds: [],
              result: {
                type: 'singleLineText',
              },
            },
          },
          {
            id: 'fldsingleCollabor',
            name: 'singleCollaborator',
            description: '',
            type: FieldType.SINGLE_COLLABORATOR,
            options: {
              choices: [
                {
                  id: 'usrBettyGleason',
                  name: 'Betty Gleason',
                  email: 'betty.gleason@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrBettyGleason',
                },
                {
                  id: 'usrDeloresWard',
                  name: 'Delores Ward',
                  email: 'delores.ward@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrDeloresWard',
                },
                {
                  id: 'usrAmyProhaska',
                  name: 'Amy Prohaska',
                  email: 'amy.prohaska@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrAmyProhaska',
                },
                {
                  id: 'usrJeffreyJaskols',
                  name: 'Jeffrey Jaskolski',
                  email: 'jeffrey.jaskolski@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrJeffreyJaskols',
                },
                {
                  id: 'usrClaudeBoehm',
                  name: 'Claude Boehm',
                  email: 'claude.boehm@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrClaudeBoehm',
                },
                {
                  id: 'usrJuanThompson',
                  name: 'Juan Thompson',
                  email: 'juan.thompson@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrJuanThompson',
                },
                {
                  id: 'usrDevinCollier',
                  name: 'Devin Collier',
                  email: 'devin.collier@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrDevinCollier',
                },
              ],
            },
          },
          {
            id: 'fldsingleLineText',
            name: 'singleLineText',
            description: '',
            type: FieldType.SINGLE_LINE_TEXT,
            options: null,
          },
          {
            id: 'fldsingleSelect',
            name: 'singleSelect',
            description: '',
            type: FieldType.SINGLE_SELECT,
            options: {
              choices: [
                {
                  id: 'selA2',
                  name: 'A',
                  color: 'blueLight2',
                },
                {
                  id: 'selB2',
                  name: 'B',
                  color: 'cyanLight2',
                },
                {
                  id: 'selC2',
                  name: 'C',
                  color: 'tealLight2',
                },
              ],
            },
          },
          {
            id: 'fldurl',
            name: 'url',
            description: '',
            type: FieldType.URL,
            options: null,
          },
        ],
        views: [
          {
            id: 'viwGridView',
            name: 'Grid view',
            type: ViewType.GRID,
            fieldOrder: {
              fieldIds: [
                'fldName',
                'fldautoNumber',
                'fldbarcode',
                'fldbutton',
                'fldcheckbox',
                'fldcount',
                'fldcreatedBy',
                'fldcreatedTime',
                'fldcurrency',
                'flddate',
                'flddateTime',
                'fldduration',
                'fldemail',
                'fldmultipleRecord',
                'fldformula',
                'fldlastModifiedBy',
                'fldlastModifiedTi',
                'fldmultilineText',
                'fldmultipleAttach',
                'fldmultipleCollab',
                'fldmultipleLookup',
                'fldmultipleSelect',
                'fldnumber',
                'fldpercent',
                'fldphoneNumber',
                'fldrating',
                'fldrichText',
                'fldrollup',
                'fldsingleCollabor',
                'fldsingleLineText',
                'fldsingleSelect',
                'fldurl',
              ],
              visibleFieldCount: 32,
            },
            records: [
              {
                id: 'recLindaDAmore',
                color: null,
              },
              {
                id: 'recVirgilGreen',
                color: null,
              },
              {
                id: 'recMrAngelOkuneva',
                color: null,
              },
              {
                id: 'recJasmineLubowit',
                color: null,
              },
              {
                id: 'recEmilioCorkery',
                color: null,
              },
              {
                id: 'recAlexanderHodki',
                color: null,
              },
              {
                id: 'recBridgetTurner',
                color: null,
              },
              {
                id: 'recGeoffreySatter',
                color: null,
              },
              {
                id: 'recTravisFay',
                color: null,
              },
              {
                id: 'recGuadalupeDenes',
                color: null,
              },
            ],
          },
        ],
        records: [
          {
            id: 'recLindaDAmore',
            commentCount: 0,
            createdTime: '2025-01-03T20:23:33.000Z',
            cellValuesByFieldId: {
              fldName: "Linda D'Amore",
              fldautoNumber: 4,
              fldbarcode: {
                text: '123',
              },
              fldbutton: {
                label: 'Button',
                url: 'https://github.com',
              },
              fldcheckbox: true,
              fldmultipleRecord: [
                {
                  id: 'recDrSeanWuckert',
                  name: 'Dr. Sean Wuckert',
                },
                {
                  id: 'recEleanorJakubow',
                  name: 'Eleanor Jakubowski',
                },
                {
                  id: 'recPeterHagenes',
                  name: 'Peter Hagenes',
                },
                {
                  id: 'recTheresaSteuber',
                  name: 'Theresa Steuber',
                },
              ],
              fldcount: 4,
              fldcreatedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldcreatedTime: '2025-01-03T20:23:33.000Z',
              fldcurrency: 41.33,
              flddate: '2024-02-23',
              flddateTime: '2025-09-05T08:45:00.000Z',
              fldduration: 46404,
              fldemail: 'Dock_Osinski11@yahoo.com',
              fldformula: "Linda D'Amore",
              fldlastModifiedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldlastModifiedTi: '2025-01-04T14:40:39.000Z',
              fldmultilineText:
                'Ustilo vester exercitationem astrum arguo pecto victoria crapula spiculum tolero. Arbustum solitudo verumtamen vulpes consequatur. Caute reprehenderit dedecor.',
              fldmultipleAttach: [
                {
                  id: 'attcats',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats/original',
                  size: 84508,
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
              fldmultipleCollab: [
                {
                  id: 'usrAmyProhaska',
                  name: 'Amy Prohaska',
                  email: 'amy.prohaska@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrAmyProhaska',
                },
              ],
              fldmultipleLookup: [
                {
                  linkedRecordId: 'recDrSeanWuckert',
                  value: {
                    id: 'recJPbr9YUnnWdHP6',
                    value: 'Dr. Sean Wuckert',
                  },
                },
                {
                  linkedRecordId: 'recEleanorJakubow',
                  value: {
                    id: 'recJPbr9YUnnWdHP6',
                    value: 'Eleanor Jakubowski',
                  },
                },
                {
                  linkedRecordId: 'recPeterHagenes',
                  value: {
                    id: 'recJPbr9YUnnWdHP6',
                    value: 'Peter Hagenes',
                  },
                },
                {
                  linkedRecordId: 'recTheresaSteuber',
                  value: {
                    id: 'recJPbr9YUnnWdHP6',
                    value: 'Theresa Steuber',
                  },
                },
              ],
              fldmultipleSelect: [
                {
                  id: 'selB',
                  name: 'B',
                  color: 'cyanLight2',
                },
              ],
              fldnumber: 97.81472058966756,
              fldpercent: 0.3099888009019196,
              fldphoneNumber: '(846) 781-6833',
              fldrating: 3,
              fldrichText:
                'Aer vaco blandior ulterius assumenda crudelis eaque carmen cometes defetiscor curo voluptatibus magnam bellicus amoveo.\n',
              fldrollup: [
                'Dr. Sean Wuckert',
                'Eleanor Jakubowski',
                'Peter Hagenes',
                'Theresa Steuber',
              ],
              fldsingleCollabor: null,
              fldsingleLineText: 'Valeo veniam administratio.',
              fldsingleSelect: {
                id: 'selB2',
                name: 'B',
                color: 'cyanLight2',
              },
              fldurl: 'https://skinny-terrarium.biz/',
            },
          },
          {
            id: 'recVirgilGreen',
            commentCount: 0,
            createdTime: '2025-01-03T20:23:34.000Z',
            cellValuesByFieldId: {
              fldName: 'Virgil Green',
              fldautoNumber: 5,
              fldbarcode: {
                text: '456',
              },
              fldbutton: {
                label: 'Button',
                url: 'https://github.com',
              },
              fldcheckbox: true,
              fldmultipleRecord: [
                {
                  id: 'recRubyKundeV',
                  name: 'Ruby Kunde V',
                },
                {
                  id: 'recCoraGerlach',
                  name: 'Cora Gerlach',
                },
                {
                  id: 'recPeterHagenes',
                  name: 'Peter Hagenes',
                },
                {
                  id: 'recOrlandoGreenfe',
                  name: 'Orlando Greenfelder',
                },
                {
                  id: 'recElmerPfannerst',
                  name: 'Elmer Pfannerstill',
                },
                {
                  id: 'recTheresaSteuber',
                  name: 'Theresa Steuber',
                },
              ],
              fldcount: 6,
              fldcreatedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldcreatedTime: '2025-01-03T20:23:34.000Z',
              fldcurrency: 2.27,
              flddate: '2024-03-29',
              flddateTime: '2025-12-19T15:09:14.533Z',
              fldduration: 39853,
              fldemail: 'Desiree.Rodriguez@yahoo.com',
              fldformula: 'Virgil Green',
              fldlastModifiedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldlastModifiedTi: '2025-01-03T20:23:50.000Z',
              fldmultilineText:
                'Titulus virga deripio vinum comedo curis culpa angulus derelinquo comitatus. Damno abstergo vulgivagus basium universe centum coruscus civitas assumenda talus. Candidus demo amo accusantium attollo depereo aer volup.',
              fldmultipleAttach: [
                {
                  id: 'attcats2',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats2/original',
                  size: 84508,
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
              fldmultipleCollab: null,
              fldmultipleLookup: [
                {
                  linkedRecordId: 'recRubyKundeV',
                  value: {
                    id: 'recYDqD3WXXgj3Bta',
                    value: 'Ruby Kunde V',
                  },
                },
                {
                  linkedRecordId: 'recCoraGerlach',
                  value: {
                    id: 'recYDqD3WXXgj3Bta',
                    value: 'Cora Gerlach',
                  },
                },
                {
                  linkedRecordId: 'recPeterHagenes',
                  value: {
                    id: 'recYDqD3WXXgj3Bta',
                    value: 'Peter Hagenes',
                  },
                },
                {
                  linkedRecordId: 'recOrlandoGreenfe',
                  value: {
                    id: 'recYDqD3WXXgj3Bta',
                    value: 'Orlando Greenfelder',
                  },
                },
                {
                  linkedRecordId: 'recElmerPfannerst',
                  value: {
                    id: 'recYDqD3WXXgj3Bta',
                    value: 'Elmer Pfannerstill',
                  },
                },
                {
                  linkedRecordId: 'recTheresaSteuber',
                  value: {
                    id: 'recYDqD3WXXgj3Bta',
                    value: 'Theresa Steuber',
                  },
                },
              ],
              fldmultipleSelect: [
                {
                  id: 'selA',
                  name: 'A',
                  color: 'blueLight2',
                },
                {
                  id: 'selB',
                  name: 'B',
                  color: 'cyanLight2',
                },
              ],
              fldnumber: 29.427431616932154,
              fldpercent: 0.07361256587319076,
              fldphoneNumber: '596.562.0933 x64591',
              fldrating: 5,
              fldrichText:
                'Taceo quaerat vulgaris adiuvo conculco alo subito soleo cenaculum aliquid campana appono culpa quas minima.\n',
              fldrollup: [
                'Ruby Kunde V',
                'Cora Gerlach',
                'Peter Hagenes',
                'Orlando Greenfelder',
                'Elmer Pfannerstill',
                'Theresa Steuber',
              ],
              fldsingleCollabor: null,
              fldsingleLineText: 'Tego censura utroque.',
              fldsingleSelect: {
                id: 'selC2',
                name: 'C',
                color: 'tealLight2',
              },
              fldurl: 'https://quarrelsome-flick.info',
            },
          },
          {
            id: 'recMrAngelOkuneva',
            commentCount: 0,
            createdTime: '2025-01-03T20:23:34.000Z',
            cellValuesByFieldId: {
              fldName: 'Mr. Angel Okuneva',
              fldautoNumber: 6,
              fldbarcode: {
                text: '789',
              },
              fldbutton: {
                label: 'Button',
                url: 'https://github.com',
              },
              fldcheckbox: null,
              fldmultipleRecord: [
                {
                  id: 'recEleanorJakubow',
                  name: 'Eleanor Jakubowski',
                },
                {
                  id: 'recPeterHagenes',
                  name: 'Peter Hagenes',
                },
                {
                  id: 'recLucilleHetting',
                  name: 'Lucille Hettinger',
                },
                {
                  id: 'recOrlandoGreenfe',
                  name: 'Orlando Greenfelder',
                },
                {
                  id: 'recTheresaSteuber',
                  name: 'Theresa Steuber',
                },
              ],
              fldcount: 5,
              fldcreatedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldcreatedTime: '2025-01-03T20:23:34.000Z',
              fldcurrency: 802.76,
              flddate: '2024-01-05',
              flddateTime: '2024-01-08T03:46:30.445Z',
              fldduration: 76239,
              fldemail: 'Abbey_Kozey10@yahoo.com',
              fldformula: 'Mr. Angel Okuneva',
              fldlastModifiedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldlastModifiedTi: '2025-01-03T20:23:50.000Z',
              fldmultilineText:
                'Cohors cubicularis cariosus canonicus quibusdam thesis defessus civis. Sollers blanditiis speculum aer. Cubicularis calco catena hic sulum.',
              fldmultipleAttach: [
                {
                  id: 'attcats3',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats3/original',
                  size: 84508,
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
              fldmultipleCollab: null,
              fldmultipleLookup: [
                {
                  linkedRecordId: 'recEleanorJakubow',
                  value: {
                    id: 'rec8gzQLls2b8ocQG',
                    value: 'Eleanor Jakubowski',
                  },
                },
                {
                  linkedRecordId: 'recPeterHagenes',
                  value: {
                    id: 'rec8gzQLls2b8ocQG',
                    value: 'Peter Hagenes',
                  },
                },
                {
                  linkedRecordId: 'recLucilleHetting',
                  value: {
                    id: 'rec8gzQLls2b8ocQG',
                    value: 'Lucille Hettinger',
                  },
                },
                {
                  linkedRecordId: 'recOrlandoGreenfe',
                  value: {
                    id: 'rec8gzQLls2b8ocQG',
                    value: 'Orlando Greenfelder',
                  },
                },
                {
                  linkedRecordId: 'recTheresaSteuber',
                  value: {
                    id: 'rec8gzQLls2b8ocQG',
                    value: 'Theresa Steuber',
                  },
                },
              ],
              fldmultipleSelect: [
                {
                  id: 'selA',
                  name: 'A',
                  color: 'blueLight2',
                },
              ],
              fldnumber: 8.144731540232897,
              fldpercent: 0.2420999191235751,
              fldphoneNumber: '499.859.7012 x473',
              fldrating: 1,
              fldrichText:
                'Textus abscido celebrer vesco triduana quisquam totam cena sufficio suus comminor impedit deprimo tener vere.\n',
              fldrollup: [
                'Eleanor Jakubowski',
                'Peter Hagenes',
                'Lucille Hettinger',
                'Orlando Greenfelder',
                'Theresa Steuber',
              ],
              fldsingleCollabor: null,
              fldsingleLineText: 'Territo beatus curatio.',
              fldsingleSelect: {
                id: 'selA2',
                name: 'A',
                color: 'blueLight2',
              },
              fldurl: 'https://sticky-chowder.biz',
            },
          },
          {
            id: 'recJasmineLubowit',
            commentCount: 0,
            createdTime: '2025-01-03T20:23:35.000Z',
            cellValuesByFieldId: {
              fldName: 'Jasmine Lubowitz',
              fldautoNumber: 7,
              fldbarcode: {
                text: '123',
              },
              fldbutton: {
                label: 'Button',
                url: 'https://github.com',
              },
              fldcheckbox: true,
              fldmultipleRecord: [
                {
                  id: 'recRaulBaumbach',
                  name: 'Raul Baumbach',
                },
                {
                  id: 'recRubyKundeV',
                  name: 'Ruby Kunde V',
                },
                {
                  id: 'recDrSeanWuckert',
                  name: 'Dr. Sean Wuckert',
                },
                {
                  id: 'recEleanorJakubow',
                  name: 'Eleanor Jakubowski',
                },
                {
                  id: 'recPeterHagenes',
                  name: 'Peter Hagenes',
                },
              ],
              fldcount: 5,
              fldcreatedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldcreatedTime: '2025-01-03T20:23:35.000Z',
              fldcurrency: 901.14,
              flddate: '2025-12-12',
              flddateTime: '2025-01-31T13:19:15.934Z',
              fldduration: 65615,
              fldemail: 'Keenan_Stoltenberg@gmail.com',
              fldformula: 'Jasmine Lubowitz',
              fldlastModifiedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldlastModifiedTi: '2025-01-03T20:23:50.000Z',
              fldmultilineText:
                'Celebrer vulgo esse sodalitas thymbra suscipit vinculum. Censura abundans valde commodo desolo velit. Corporis iste usus debilito molestias vorax absum tertius.',
              fldmultipleAttach: [
                {
                  id: 'attcats4',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats4/original',
                  size: 84508,
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
              fldmultipleCollab: null,
              fldmultipleLookup: [
                {
                  linkedRecordId: 'recRaulBaumbach',
                  value: {
                    id: 'rec6hEp0urIQ8UPpG',
                    value: 'Raul Baumbach',
                  },
                },
                {
                  linkedRecordId: 'recRubyKundeV',
                  value: {
                    id: 'rec6hEp0urIQ8UPpG',
                    value: 'Ruby Kunde V',
                  },
                },
                {
                  linkedRecordId: 'recDrSeanWuckert',
                  value: {
                    id: 'rec6hEp0urIQ8UPpG',
                    value: 'Dr. Sean Wuckert',
                  },
                },
                {
                  linkedRecordId: 'recEleanorJakubow',
                  value: {
                    id: 'rec6hEp0urIQ8UPpG',
                    value: 'Eleanor Jakubowski',
                  },
                },
                {
                  linkedRecordId: 'recPeterHagenes',
                  value: {
                    id: 'rec6hEp0urIQ8UPpG',
                    value: 'Peter Hagenes',
                  },
                },
              ],
              fldmultipleSelect: null,
              fldnumber: 1.5696260845288634,
              fldpercent: 0.8813474436756223,
              fldphoneNumber: '1-576-305-0471',
              fldrating: 4,
              fldrichText:
                'Dolorem deprimo tersus suggero trucido adstringo aequus compello peccatus aro vae aureus soleo iusto complectus.\n',
              fldrollup: [
                'Raul Baumbach',
                'Ruby Kunde V',
                'Dr. Sean Wuckert',
                'Eleanor Jakubowski',
                'Peter Hagenes',
              ],
              fldsingleCollabor: null,
              fldsingleLineText: 'Pax suspendo voluptates.',
              fldsingleSelect: {
                id: 'selB2',
                name: 'B',
                color: 'cyanLight2',
              },
              fldurl: 'https://failing-hood.name/',
            },
          },
          {
            id: 'recEmilioCorkery',
            commentCount: 0,
            createdTime: '2025-01-03T20:23:35.000Z',
            cellValuesByFieldId: {
              fldName: 'Emilio Corkery',
              fldautoNumber: 8,
              fldbarcode: {
                text: '456',
              },
              fldbutton: {
                label: 'Button',
                url: 'https://github.com',
              },
              fldcheckbox: true,
              fldmultipleRecord: [
                {
                  id: 'recRaulBaumbach',
                  name: 'Raul Baumbach',
                },
                {
                  id: 'recCoraGerlach',
                  name: 'Cora Gerlach',
                },
                {
                  id: 'recOrlandoGreenfe',
                  name: 'Orlando Greenfelder',
                },
                {
                  id: 'recTheresaSteuber',
                  name: 'Theresa Steuber',
                },
              ],
              fldcount: 4,
              fldcreatedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldcreatedTime: '2025-01-03T20:23:35.000Z',
              fldcurrency: 380.93,
              flddate: '2024-01-28',
              flddateTime: '2024-02-26T22:13:45.114Z',
              fldduration: 1917,
              fldemail: 'Charley_Smitham44@hotmail.com',
              fldformula: 'Emilio Corkery',
              fldlastModifiedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldlastModifiedTi: '2025-01-03T20:23:50.000Z',
              fldmultilineText:
                'Audax vivo clementia nihil demoror pauper. Vallum antiquus studio deripio bonus volup charisma pecco thalassinus. Cupressus commodo nesciunt cicuta.',
              fldmultipleAttach: [
                {
                  id: 'attcats5',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats5/original',
                  size: 84508,
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
              fldmultipleCollab: null,
              fldmultipleLookup: [
                {
                  linkedRecordId: 'recRaulBaumbach',
                  value: {
                    id: 'recZKfM9qq1DOQP3j',
                    value: 'Raul Baumbach',
                  },
                },
                {
                  linkedRecordId: 'recCoraGerlach',
                  value: {
                    id: 'recZKfM9qq1DOQP3j',
                    value: 'Cora Gerlach',
                  },
                },
                {
                  linkedRecordId: 'recOrlandoGreenfe',
                  value: {
                    id: 'recZKfM9qq1DOQP3j',
                    value: 'Orlando Greenfelder',
                  },
                },
                {
                  linkedRecordId: 'recTheresaSteuber',
                  value: {
                    id: 'recZKfM9qq1DOQP3j',
                    value: 'Theresa Steuber',
                  },
                },
              ],
              fldmultipleSelect: null,
              fldnumber: 48.93150913994759,
              fldpercent: 0.9849245466757566,
              fldphoneNumber: '(288) 652-1711 x36996',
              fldrating: 2,
              fldrichText:
                'Cavus animi vigor balbus solium cito cupressus crur adamo xiphias adsidue substantia magni theca trepide.\n',
              fldrollup: [
                'Raul Baumbach',
                'Cora Gerlach',
                'Orlando Greenfelder',
                'Theresa Steuber',
              ],
              fldsingleCollabor: null,
              fldsingleLineText: 'Repellat ipsam auxilium.',
              fldsingleSelect: {
                id: 'selB2',
                name: 'B',
                color: 'cyanLight2',
              },
              fldurl: 'https://pleasing-retouching.biz/',
            },
          },
          {
            id: 'recAlexanderHodki',
            commentCount: 0,
            createdTime: '2025-01-03T20:23:36.000Z',
            cellValuesByFieldId: {
              fldName: 'Alexander Hodkiewicz',
              fldautoNumber: 9,
              fldbarcode: {
                text: '789',
              },
              fldbutton: {
                label: 'Button',
                url: 'https://github.com',
              },
              fldcheckbox: true,
              fldmultipleRecord: [
                {
                  id: 'recRaulBaumbach',
                  name: 'Raul Baumbach',
                },
                {
                  id: 'recRubyKundeV',
                  name: 'Ruby Kunde V',
                },
                {
                  id: 'recCoraGerlach',
                  name: 'Cora Gerlach',
                },
                {
                  id: 'recDrSeanWuckert',
                  name: 'Dr. Sean Wuckert',
                },
                {
                  id: 'recEleanorJakubow',
                  name: 'Eleanor Jakubowski',
                },
                {
                  id: 'recPeterHagenes',
                  name: 'Peter Hagenes',
                },
                {
                  id: 'recOrlandoGreenfe',
                  name: 'Orlando Greenfelder',
                },
                {
                  id: 'recElmerPfannerst',
                  name: 'Elmer Pfannerstill',
                },
                {
                  id: 'recTheresaSteuber',
                  name: 'Theresa Steuber',
                },
              ],
              fldcount: 9,
              fldcreatedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldcreatedTime: '2025-01-03T20:23:36.000Z',
              fldcurrency: 729.11,
              flddate: '2024-02-13',
              flddateTime: '2025-06-26T22:48:44.826Z',
              fldduration: 73995,
              fldemail: 'Orland_Streich65@gmail.com',
              fldformula: 'Alexander Hodkiewicz',
              fldlastModifiedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldlastModifiedTi: '2025-01-03T20:23:50.000Z',
              fldmultilineText:
                'Antepono virtus uberrime commemoro aliquid vulpes tres magni ulciscor. Vesica textor voluptatum tandem volo sortitus terebro abutor talis atavus. Textus testimonium aequus cuppedia turpis.',
              fldmultipleAttach: [
                {
                  id: 'attcats6',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats6/original',
                  size: 84508,
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
              fldmultipleCollab: null,
              fldmultipleLookup: [
                {
                  linkedRecordId: 'recRaulBaumbach',
                  value: {
                    id: 'recHGTW1P8P7IBOct',
                    value: 'Raul Baumbach',
                  },
                },
                {
                  linkedRecordId: 'recRubyKundeV',
                  value: {
                    id: 'recHGTW1P8P7IBOct',
                    value: 'Ruby Kunde V',
                  },
                },
                {
                  linkedRecordId: 'recCoraGerlach',
                  value: {
                    id: 'recHGTW1P8P7IBOct',
                    value: 'Cora Gerlach',
                  },
                },
                {
                  linkedRecordId: 'recDrSeanWuckert',
                  value: {
                    id: 'recHGTW1P8P7IBOct',
                    value: 'Dr. Sean Wuckert',
                  },
                },
                {
                  linkedRecordId: 'recEleanorJakubow',
                  value: {
                    id: 'recHGTW1P8P7IBOct',
                    value: 'Eleanor Jakubowski',
                  },
                },
                {
                  linkedRecordId: 'recPeterHagenes',
                  value: {
                    id: 'recHGTW1P8P7IBOct',
                    value: 'Peter Hagenes',
                  },
                },
                {
                  linkedRecordId: 'recOrlandoGreenfe',
                  value: {
                    id: 'recHGTW1P8P7IBOct',
                    value: 'Orlando Greenfelder',
                  },
                },
                {
                  linkedRecordId: 'recElmerPfannerst',
                  value: {
                    id: 'recHGTW1P8P7IBOct',
                    value: 'Elmer Pfannerstill',
                  },
                },
                {
                  linkedRecordId: 'recTheresaSteuber',
                  value: {
                    id: 'recHGTW1P8P7IBOct',
                    value: 'Theresa Steuber',
                  },
                },
              ],
              fldmultipleSelect: [
                {
                  id: 'selA',
                  name: 'A',
                  color: 'blueLight2',
                },
                {
                  id: 'selB',
                  name: 'B',
                  color: 'cyanLight2',
                },
                {
                  id: 'selC',
                  name: 'C',
                  color: 'tealLight2',
                },
              ],
              fldnumber: 20.66085555125028,
              fldpercent: 0.19961489853449166,
              fldphoneNumber: '379-395-4166 x6250',
              fldrating: 1,
              fldrichText:
                'Tergiversatio suscipit tremo vivo commodo abundans neque consequatur tertius anser cubitum summopere demitto caritas tergum.\n',
              fldrollup: [
                'Raul Baumbach',
                'Ruby Kunde V',
                'Cora Gerlach',
                'Dr. Sean Wuckert',
                'Eleanor Jakubowski',
                'Peter Hagenes',
                'Orlando Greenfelder',
                'Elmer Pfannerstill',
                'Theresa Steuber',
              ],
              fldsingleCollabor: null,
              fldsingleLineText: 'Cuius avaritia solus.',
              fldsingleSelect: {
                id: 'selB2',
                name: 'B',
                color: 'cyanLight2',
              },
              fldurl: 'https://rash-pusher.info',
            },
          },
          {
            id: 'recBridgetTurner',
            commentCount: 0,
            createdTime: '2025-01-03T20:23:36.000Z',
            cellValuesByFieldId: {
              fldName: 'Bridget Turner',
              fldautoNumber: 10,
              fldbarcode: {
                text: '123',
              },
              fldbutton: {
                label: 'Button',
                url: 'https://github.com',
              },
              fldcheckbox: true,
              fldmultipleRecord: [
                {
                  id: 'recRaulBaumbach',
                  name: 'Raul Baumbach',
                },
                {
                  id: 'recEleanorJakubow',
                  name: 'Eleanor Jakubowski',
                },
                {
                  id: 'recLucilleHetting',
                  name: 'Lucille Hettinger',
                },
                {
                  id: 'recOrlandoGreenfe',
                  name: 'Orlando Greenfelder',
                },
                {
                  id: 'recTheresaSteuber',
                  name: 'Theresa Steuber',
                },
              ],
              fldcount: 5,
              fldcreatedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldcreatedTime: '2025-01-03T20:23:36.000Z',
              fldcurrency: 566.08,
              flddate: '2025-02-02',
              flddateTime: '2025-03-11T21:08:26.069Z',
              fldduration: 85726,
              fldemail: 'Cassidy26@yahoo.com',
              fldformula: 'Bridget Turner',
              fldlastModifiedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldlastModifiedTi: '2025-01-03T20:23:51.000Z',
              fldmultilineText:
                'Ventito virtus sonitus. Commodi aduro blandior. Tredecim appono suasoria celer catena textus comparo iure ipsam.',
              fldmultipleAttach: [
                {
                  id: 'attcats7',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats7/original',
                  size: 84508,
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
              fldmultipleCollab: null,
              fldmultipleLookup: [
                {
                  linkedRecordId: 'recRaulBaumbach',
                  value: {
                    id: 'recpTWF3jBmJUiI2K',
                    value: 'Raul Baumbach',
                  },
                },
                {
                  linkedRecordId: 'recEleanorJakubow',
                  value: {
                    id: 'recpTWF3jBmJUiI2K',
                    value: 'Eleanor Jakubowski',
                  },
                },
                {
                  linkedRecordId: 'recLucilleHetting',
                  value: {
                    id: 'recpTWF3jBmJUiI2K',
                    value: 'Lucille Hettinger',
                  },
                },
                {
                  linkedRecordId: 'recOrlandoGreenfe',
                  value: {
                    id: 'recpTWF3jBmJUiI2K',
                    value: 'Orlando Greenfelder',
                  },
                },
                {
                  linkedRecordId: 'recTheresaSteuber',
                  value: {
                    id: 'recpTWF3jBmJUiI2K',
                    value: 'Theresa Steuber',
                  },
                },
              ],
              fldmultipleSelect: [
                {
                  id: 'selA',
                  name: 'A',
                  color: 'blueLight2',
                },
                {
                  id: 'selB',
                  name: 'B',
                  color: 'cyanLight2',
                },
                {
                  id: 'selC',
                  name: 'C',
                  color: 'tealLight2',
                },
              ],
              fldnumber: 40.709730493836105,
              fldpercent: 0.3903339698445052,
              fldphoneNumber: '(200) 663-9219 x782',
              fldrating: 5,
              fldrichText:
                'Aequus solvo caecus titulus arceo terminatio conqueror ancilla crudelis iste damnatio caelestis alioqui appono amoveo.\n',
              fldrollup: [
                'Raul Baumbach',
                'Eleanor Jakubowski',
                'Lucille Hettinger',
                'Orlando Greenfelder',
                'Theresa Steuber',
              ],
              fldsingleCollabor: null,
              fldsingleLineText: 'Anser facilis voluntarius.',
              fldsingleSelect: {
                id: 'selB2',
                name: 'B',
                color: 'cyanLight2',
              },
              fldurl: 'https://spry-manacle.com/',
            },
          },
          {
            id: 'recGeoffreySatter',
            commentCount: 0,
            createdTime: '2025-01-03T20:23:37.000Z',
            cellValuesByFieldId: {
              fldName: 'Geoffrey Satterfield',
              fldautoNumber: 11,
              fldbarcode: {
                text: '456',
              },
              fldbutton: {
                label: 'Button',
                url: 'https://github.com',
              },
              fldcheckbox: null,
              fldmultipleRecord: [
                {
                  id: 'recRubyKundeV',
                  name: 'Ruby Kunde V',
                },
                {
                  id: 'recCoraGerlach',
                  name: 'Cora Gerlach',
                },
                {
                  id: 'recDrSeanWuckert',
                  name: 'Dr. Sean Wuckert',
                },
                {
                  id: 'recLucilleHetting',
                  name: 'Lucille Hettinger',
                },
                {
                  id: 'recOrlandoGreenfe',
                  name: 'Orlando Greenfelder',
                },
                {
                  id: 'recElmerPfannerst',
                  name: 'Elmer Pfannerstill',
                },
                {
                  id: 'recTheresaSteuber',
                  name: 'Theresa Steuber',
                },
              ],
              fldcount: 7,
              fldcreatedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldcreatedTime: '2025-01-03T20:23:37.000Z',
              fldcurrency: 384.42,
              flddate: '2024-02-29',
              flddateTime: '2025-01-01T10:20:50.570Z',
              fldduration: 60729,
              fldemail: 'Duncan27@yahoo.com',
              fldformula: 'Geoffrey Satterfield',
              fldlastModifiedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldlastModifiedTi: '2025-01-03T20:23:51.000Z',
              fldmultilineText:
                'Vinculum spectaculum animi pel adicio coma. Voluptates aegrotatio solvo. Absorbeo celebrer supellex cohaero ea vehemens spero ea auditor.',
              fldmultipleAttach: [
                {
                  id: 'attcats8',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats8/original',
                  size: 84508,
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
              fldmultipleCollab: null,
              fldmultipleLookup: [
                {
                  linkedRecordId: 'recRubyKundeV',
                  value: {
                    id: 'recNF3Gn2GIh9Dg8r',
                    value: 'Ruby Kunde V',
                  },
                },
                {
                  linkedRecordId: 'recCoraGerlach',
                  value: {
                    id: 'recNF3Gn2GIh9Dg8r',
                    value: 'Cora Gerlach',
                  },
                },
                {
                  linkedRecordId: 'recDrSeanWuckert',
                  value: {
                    id: 'recNF3Gn2GIh9Dg8r',
                    value: 'Dr. Sean Wuckert',
                  },
                },
                {
                  linkedRecordId: 'recLucilleHetting',
                  value: {
                    id: 'recNF3Gn2GIh9Dg8r',
                    value: 'Lucille Hettinger',
                  },
                },
                {
                  linkedRecordId: 'recOrlandoGreenfe',
                  value: {
                    id: 'recNF3Gn2GIh9Dg8r',
                    value: 'Orlando Greenfelder',
                  },
                },
                {
                  linkedRecordId: 'recElmerPfannerst',
                  value: {
                    id: 'recNF3Gn2GIh9Dg8r',
                    value: 'Elmer Pfannerstill',
                  },
                },
                {
                  linkedRecordId: 'recTheresaSteuber',
                  value: {
                    id: 'recNF3Gn2GIh9Dg8r',
                    value: 'Theresa Steuber',
                  },
                },
              ],
              fldmultipleSelect: [
                {
                  id: 'selB',
                  name: 'B',
                  color: 'cyanLight2',
                },
              ],
              fldnumber: 96.60988023970276,
              fldpercent: 0.5333586286287755,
              fldphoneNumber: '904-925-0739 x213',
              fldrating: 3,
              fldrichText:
                'Utpote aeternus vulpes blanditiis aurum defaeco ulciscor utrimque colo doloribus ante vaco vae vitium spero.\n',
              fldrollup: [
                'Ruby Kunde V',
                'Cora Gerlach',
                'Dr. Sean Wuckert',
                'Lucille Hettinger',
                'Orlando Greenfelder',
                'Elmer Pfannerstill',
                'Theresa Steuber',
              ],
              fldsingleCollabor: null,
              fldsingleLineText: 'Bellum copia suspendo.',
              fldsingleSelect: {
                id: 'selA2',
                name: 'A',
                color: 'blueLight2',
              },
              fldurl: 'https://impressive-minimalism.net/',
            },
          },
          {
            id: 'recTravisFay',
            commentCount: 0,
            createdTime: '2025-01-03T20:23:37.000Z',
            cellValuesByFieldId: {
              fldName: 'Travis Fay',
              fldautoNumber: 12,
              fldbarcode: {
                text: '789',
              },
              fldbutton: {
                label: 'Button',
                url: 'https://github.com',
              },
              fldcheckbox: true,
              fldmultipleRecord: [
                {
                  id: 'recRaulBaumbach',
                  name: 'Raul Baumbach',
                },
                {
                  id: 'recCoraGerlach',
                  name: 'Cora Gerlach',
                },
                {
                  id: 'recDrSeanWuckert',
                  name: 'Dr. Sean Wuckert',
                },
                {
                  id: 'recEleanorJakubow',
                  name: 'Eleanor Jakubowski',
                },
                {
                  id: 'recPeterHagenes',
                  name: 'Peter Hagenes',
                },
                {
                  id: 'recElmerPfannerst',
                  name: 'Elmer Pfannerstill',
                },
                {
                  id: 'recTheresaSteuber',
                  name: 'Theresa Steuber',
                },
              ],
              fldcount: 7,
              fldcreatedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldcreatedTime: '2025-01-03T20:23:37.000Z',
              fldcurrency: 899.12,
              flddate: '2024-05-01',
              flddateTime: '2025-03-30T23:25:01.388Z',
              fldduration: 19328,
              fldemail: 'Enrico.Sawayn30@gmail.com',
              fldformula: 'Travis Fay',
              fldlastModifiedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldlastModifiedTi: '2025-01-03T20:23:51.000Z',
              fldmultilineText:
                'Coaegresco complectus dignissimos thymbra. Aureus delicate avaritia somnus vel aliquid ocer sumptus rem. Cinis exercitationem balbus.',
              fldmultipleAttach: [
                {
                  id: 'attcats9',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats9/original',
                  size: 84508,
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
              fldmultipleCollab: null,
              fldmultipleLookup: [
                {
                  linkedRecordId: 'recRaulBaumbach',
                  value: {
                    id: 'recSTnvq3ybJpPL9D',
                    value: 'Raul Baumbach',
                  },
                },
                {
                  linkedRecordId: 'recCoraGerlach',
                  value: {
                    id: 'recSTnvq3ybJpPL9D',
                    value: 'Cora Gerlach',
                  },
                },
                {
                  linkedRecordId: 'recDrSeanWuckert',
                  value: {
                    id: 'recSTnvq3ybJpPL9D',
                    value: 'Dr. Sean Wuckert',
                  },
                },
                {
                  linkedRecordId: 'recEleanorJakubow',
                  value: {
                    id: 'recSTnvq3ybJpPL9D',
                    value: 'Eleanor Jakubowski',
                  },
                },
                {
                  linkedRecordId: 'recPeterHagenes',
                  value: {
                    id: 'recSTnvq3ybJpPL9D',
                    value: 'Peter Hagenes',
                  },
                },
                {
                  linkedRecordId: 'recElmerPfannerst',
                  value: {
                    id: 'recSTnvq3ybJpPL9D',
                    value: 'Elmer Pfannerstill',
                  },
                },
                {
                  linkedRecordId: 'recTheresaSteuber',
                  value: {
                    id: 'recSTnvq3ybJpPL9D',
                    value: 'Theresa Steuber',
                  },
                },
              ],
              fldmultipleSelect: [
                {
                  id: 'selC',
                  name: 'C',
                  color: 'tealLight2',
                },
              ],
              fldnumber: 75.90739743318409,
              fldpercent: 0.8209933191537857,
              fldphoneNumber: '(506) 258-9156',
              fldrating: 1,
              fldrichText:
                'Suppono cupressus solum bene vicinus crepusculum temperantia studio vere virgo vilitas delectus anser solum magni.\n',
              fldrollup: [
                'Raul Baumbach',
                'Cora Gerlach',
                'Dr. Sean Wuckert',
                'Eleanor Jakubowski',
                'Peter Hagenes',
                'Elmer Pfannerstill',
                'Theresa Steuber',
              ],
              fldsingleCollabor: null,
              fldsingleLineText: 'Thymum adulescens cattus.',
              fldsingleSelect: {
                id: 'selC2',
                name: 'C',
                color: 'tealLight2',
              },
              fldurl: 'https://worst-rabbi.org/',
            },
          },
          {
            id: 'recGuadalupeDenes',
            commentCount: 0,
            createdTime: '2025-01-03T20:23:38.000Z',
            cellValuesByFieldId: {
              fldName: 'Guadalupe Denesik',
              fldautoNumber: 13,
              fldbarcode: {
                text: '789',
              },
              fldbutton: {
                label: 'Button',
                url: 'https://github.com',
              },
              fldcheckbox: null,
              fldmultipleRecord: [
                {
                  id: 'recRaulBaumbach',
                  name: 'Raul Baumbach',
                },
                {
                  id: 'recRubyKundeV',
                  name: 'Ruby Kunde V',
                },
                {
                  id: 'recCoraGerlach',
                  name: 'Cora Gerlach',
                },
                {
                  id: 'recLucilleHetting',
                  name: 'Lucille Hettinger',
                },
                {
                  id: 'recOrlandoGreenfe',
                  name: 'Orlando Greenfelder',
                },
                {
                  id: 'recTheresaSteuber',
                  name: 'Theresa Steuber',
                },
              ],
              fldcount: 6,
              fldcreatedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldcreatedTime: '2025-01-03T20:23:38.000Z',
              fldcurrency: 490.41,
              flddate: '2025-05-23',
              flddateTime: '2024-10-31T17:00:45.426Z',
              fldduration: 38791,
              fldemail: 'Jazmyn_Nolan83@yahoo.com',
              fldformula: 'Guadalupe Denesik',
              fldlastModifiedBy: {
                id: 'usrAmyProhaska',
                name: 'Amy Prohaska',
                email: 'amy.prohaska@airtable.test',
                profilePicUrl:
                  'https://dl.airtable.test/.profilePics/usrAmyProhaska',
              },
              fldlastModifiedTi: '2025-01-03T20:23:52.000Z',
              fldmultilineText:
                'Cultellus atque aedificium officiis candidus adamo rem succedo attonbitus. Accusamus delectus bellum viriliter circumvenio adulatio. Architecto necessitatibus sustineo.',
              fldmultipleAttach: [
                {
                  id: 'attcats10',
                  filename: 'cats',
                  url: 'https://dl.airtable.test/attcats10/original',
                  size: 84508,
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
              fldmultipleCollab: null,
              fldmultipleLookup: [
                {
                  linkedRecordId: 'recRaulBaumbach',
                  value: {
                    id: 'reczXUmpFUpNMb224',
                    value: 'Raul Baumbach',
                  },
                },
                {
                  linkedRecordId: 'recRubyKundeV',
                  value: {
                    id: 'reczXUmpFUpNMb224',
                    value: 'Ruby Kunde V',
                  },
                },
                {
                  linkedRecordId: 'recCoraGerlach',
                  value: {
                    id: 'reczXUmpFUpNMb224',
                    value: 'Cora Gerlach',
                  },
                },
                {
                  linkedRecordId: 'recLucilleHetting',
                  value: {
                    id: 'reczXUmpFUpNMb224',
                    value: 'Lucille Hettinger',
                  },
                },
                {
                  linkedRecordId: 'recOrlandoGreenfe',
                  value: {
                    id: 'reczXUmpFUpNMb224',
                    value: 'Orlando Greenfelder',
                  },
                },
                {
                  linkedRecordId: 'recTheresaSteuber',
                  value: {
                    id: 'reczXUmpFUpNMb224',
                    value: 'Theresa Steuber',
                  },
                },
              ],
              fldmultipleSelect: [
                {
                  id: 'selB',
                  name: 'B',
                  color: 'cyanLight2',
                },
              ],
              fldnumber: 84.3481597257778,
              fldpercent: 0.7553086907137185,
              fldphoneNumber: '(699) 264-7807 x42284',
              fldrating: 1,
              fldrichText:
                'Sordeo antea quasi aeger aegrotatio totus quia cunctatio anser verto chirographum decipio vilis pariatur sodalitas.\n',
              fldrollup: [
                'Raul Baumbach',
                'Ruby Kunde V',
                'Cora Gerlach',
                'Lucille Hettinger',
                'Orlando Greenfelder',
                'Theresa Steuber',
              ],
              fldsingleCollabor: null,
              fldsingleLineText: 'Expedita causa temeritas.',
              fldsingleSelect: {
                id: 'selB2',
                name: 'B',
                color: 'cyanLight2',
              },
              fldurl: 'https://whispered-locker.org',
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
            id: 'fldNotes',
            name: 'Notes',
            description: '',
            type: FieldType.MULTILINE_TEXT,
            options: null,
          },
          {
            id: 'fldAssignee',
            name: 'Assignee',
            description: '',
            type: FieldType.SINGLE_COLLABORATOR,
            options: {
              choices: [
                {
                  id: 'usrBettyGleason',
                  name: 'Betty Gleason',
                  email: 'betty.gleason@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrBettyGleason',
                },
                {
                  id: 'usrDeloresWard',
                  name: 'Delores Ward',
                  email: 'delores.ward@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrDeloresWard',
                },
                {
                  id: 'usrAmyProhaska',
                  name: 'Amy Prohaska',
                  email: 'amy.prohaska@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrAmyProhaska',
                },
                {
                  id: 'usrJeffreyJaskols',
                  name: 'Jeffrey Jaskolski',
                  email: 'jeffrey.jaskolski@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrJeffreyJaskols',
                },
                {
                  id: 'usrClaudeBoehm',
                  name: 'Claude Boehm',
                  email: 'claude.boehm@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrClaudeBoehm',
                },
                {
                  id: 'usrJuanThompson',
                  name: 'Juan Thompson',
                  email: 'juan.thompson@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrJuanThompson',
                },
                {
                  id: 'usrDevinCollier',
                  name: 'Devin Collier',
                  email: 'devin.collier@airtable.test',
                  profilePicUrl:
                    'https://dl.airtable.test/.profilePics/usrDevinCollier',
                },
              ],
            },
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
            id: 'fldTableA',
            name: 'Table A',
            description: '',
            type: FieldType.MULTIPLE_RECORD_LINKS,
            options: {
              linkedTableId: 'tblTableA',
              isReversed: false,
              prefersSingleRecordLink: false,
              inverseLinkFieldId: 'fldmultipleRecord',
              viewIdForRecordSelection: undefined,
            },
          },
        ],
        views: [
          {
            id: 'viwGridView2',
            name: 'Grid view',
            type: ViewType.GRID,
            fieldOrder: {
              fieldIds: [
                'fldName2',
                'fldNotes',
                'fldAssignee',
                'fldStatus',
                'fldTableA',
              ],
              visibleFieldCount: 5,
            },
            records: [
              {
                id: 'recRaulBaumbach',
                color: null,
              },
              {
                id: 'recRubyKundeV',
                color: null,
              },
              {
                id: 'recCoraGerlach',
                color: null,
              },
              {
                id: 'recDrSeanWuckert',
                color: null,
              },
              {
                id: 'recEleanorJakubow',
                color: null,
              },
              {
                id: 'recPeterHagenes',
                color: null,
              },
              {
                id: 'recLucilleHetting',
                color: null,
              },
              {
                id: 'recOrlandoGreenfe',
                color: null,
              },
              {
                id: 'recElmerPfannerst',
                color: null,
              },
              {
                id: 'recTheresaSteuber',
                color: null,
              },
            ],
          },
        ],
        records: [
          {
            id: 'recRaulBaumbach',
            commentCount: 0,
            createdTime: '2025-01-03T20:22:00.000Z',
            cellValuesByFieldId: {
              fldName2: 'Raul Baumbach',
              fldNotes:
                'Appello tibi adnuo alo talis suadeo ocer capto toties explicabo supellex aut super pax tunc.',
              fldAssignee: null,
              fldStatus: {
                id: 'selInProgress',
                name: 'In progress',
                color: 'yellowLight2',
              },
              fldTableA: [
                {
                  id: 'recJasmineLubowit',
                  name: 'Jasmine Lubowitz',
                },
                {
                  id: 'recEmilioCorkery',
                  name: 'Emilio Corkery',
                },
                {
                  id: 'recAlexanderHodki',
                  name: 'Alexander Hodkiewicz',
                },
                {
                  id: 'recBridgetTurner',
                  name: 'Bridget Turner',
                },
                {
                  id: 'recTravisFay',
                  name: 'Travis Fay',
                },
                {
                  id: 'recGuadalupeDenes',
                  name: 'Guadalupe Denesik',
                },
              ],
            },
          },
          {
            id: 'recRubyKundeV',
            commentCount: 0,
            createdTime: '2025-01-03T20:22:01.000Z',
            cellValuesByFieldId: {
              fldName2: 'Ruby Kunde V',
              fldNotes:
                'Atrocitas confugo apparatus suffoco brevis talis cibus fugiat tribuo damno cernuus sumptus quos cupio ambulo.',
              fldAssignee: null,
              fldStatus: {
                id: 'selTodo',
                name: 'Todo',
                color: 'redLight2',
              },
              fldTableA: [
                {
                  id: 'recVirgilGreen',
                  name: 'Virgil Green',
                },
                {
                  id: 'recJasmineLubowit',
                  name: 'Jasmine Lubowitz',
                },
                {
                  id: 'recAlexanderHodki',
                  name: 'Alexander Hodkiewicz',
                },
                {
                  id: 'recGeoffreySatter',
                  name: 'Geoffrey Satterfield',
                },
                {
                  id: 'recGuadalupeDenes',
                  name: 'Guadalupe Denesik',
                },
              ],
            },
          },
          {
            id: 'recDrSeanWuckert',
            commentCount: 0,
            createdTime: '2025-01-03T20:22:02.000Z',
            cellValuesByFieldId: {
              fldName2: 'Dr. Sean Wuckert',
              fldNotes:
                'Caterva alias fuga thymbra thymbra curo cito versus tergum angelus curo tres talio dicta adfero.',
              fldAssignee: null,
              fldStatus: {
                id: 'selDone',
                name: 'Done',
                color: 'greenLight2',
              },
              fldTableA: [
                {
                  id: 'recLindaDAmore',
                  name: "Linda D'Amore",
                },
                {
                  id: 'recJasmineLubowit',
                  name: 'Jasmine Lubowitz',
                },
                {
                  id: 'recAlexanderHodki',
                  name: 'Alexander Hodkiewicz',
                },
                {
                  id: 'recGeoffreySatter',
                  name: 'Geoffrey Satterfield',
                },
                {
                  id: 'recTravisFay',
                  name: 'Travis Fay',
                },
              ],
            },
          },
          {
            id: 'recCoraGerlach',
            commentCount: 0,
            createdTime: '2025-01-03T20:22:02.000Z',
            cellValuesByFieldId: {
              fldName2: 'Cora Gerlach',
              fldNotes:
                'Civitas alo truculenter color talus cultura voluptas coaegresco vorago aptus voveo odio vespillo desparatus aegrotatio.',
              fldAssignee: null,
              fldStatus: {
                id: 'selTodo',
                name: 'Todo',
                color: 'redLight2',
              },
              fldTableA: [
                {
                  id: 'recVirgilGreen',
                  name: 'Virgil Green',
                },
                {
                  id: 'recEmilioCorkery',
                  name: 'Emilio Corkery',
                },
                {
                  id: 'recAlexanderHodki',
                  name: 'Alexander Hodkiewicz',
                },
                {
                  id: 'recGeoffreySatter',
                  name: 'Geoffrey Satterfield',
                },
                {
                  id: 'recTravisFay',
                  name: 'Travis Fay',
                },
                {
                  id: 'recGuadalupeDenes',
                  name: 'Guadalupe Denesik',
                },
              ],
            },
          },
          {
            id: 'recEleanorJakubow',
            commentCount: 0,
            createdTime: '2025-01-03T20:22:03.000Z',
            cellValuesByFieldId: {
              fldName2: 'Eleanor Jakubowski',
              fldNotes:
                'Sortitus crux vicissitudo conatus teneo soluta certus quos qui conicio amita quibusdam admitto carbo venio.',
              fldAssignee: null,
              fldStatus: {
                id: 'selDone',
                name: 'Done',
                color: 'greenLight2',
              },
              fldTableA: [
                {
                  id: 'recLindaDAmore',
                  name: "Linda D'Amore",
                },
                {
                  id: 'recMrAngelOkuneva',
                  name: 'Mr. Angel Okuneva',
                },
                {
                  id: 'recJasmineLubowit',
                  name: 'Jasmine Lubowitz',
                },
                {
                  id: 'recAlexanderHodki',
                  name: 'Alexander Hodkiewicz',
                },
                {
                  id: 'recBridgetTurner',
                  name: 'Bridget Turner',
                },
                {
                  id: 'recTravisFay',
                  name: 'Travis Fay',
                },
              ],
            },
          },
          {
            id: 'recLucilleHetting',
            commentCount: 0,
            createdTime: '2025-01-03T20:22:04.000Z',
            cellValuesByFieldId: {
              fldName2: 'Lucille Hettinger',
              fldNotes:
                'Dedecor ratione dolores vae testimonium modi circumvenio consequuntur damno aeneus vulnus alveus tollo thesaurus temperantia.',
              fldAssignee: null,
              fldStatus: {
                id: 'selDone',
                name: 'Done',
                color: 'greenLight2',
              },
              fldTableA: [
                {
                  id: 'recMrAngelOkuneva',
                  name: 'Mr. Angel Okuneva',
                },
                {
                  id: 'recBridgetTurner',
                  name: 'Bridget Turner',
                },
                {
                  id: 'recGeoffreySatter',
                  name: 'Geoffrey Satterfield',
                },
                {
                  id: 'recGuadalupeDenes',
                  name: 'Guadalupe Denesik',
                },
              ],
            },
          },
          {
            id: 'recPeterHagenes',
            commentCount: 0,
            createdTime: '2025-01-03T20:22:04.000Z',
            cellValuesByFieldId: {
              fldName2: 'Peter Hagenes',
              fldNotes:
                'Defendo collum odio urbs vorago alveus torrens tandem corpus velociter vestrum sophismata vehemens contigo virtus.',
              fldAssignee: null,
              fldStatus: {
                id: 'selInProgress',
                name: 'In progress',
                color: 'yellowLight2',
              },
              fldTableA: [
                {
                  id: 'recLindaDAmore',
                  name: "Linda D'Amore",
                },
                {
                  id: 'recVirgilGreen',
                  name: 'Virgil Green',
                },
                {
                  id: 'recMrAngelOkuneva',
                  name: 'Mr. Angel Okuneva',
                },
                {
                  id: 'recJasmineLubowit',
                  name: 'Jasmine Lubowitz',
                },
                {
                  id: 'recAlexanderHodki',
                  name: 'Alexander Hodkiewicz',
                },
                {
                  id: 'recTravisFay',
                  name: 'Travis Fay',
                },
              ],
            },
          },
          {
            id: 'recElmerPfannerst',
            commentCount: 0,
            createdTime: '2025-01-03T20:22:05.000Z',
            cellValuesByFieldId: {
              fldName2: 'Elmer Pfannerstill',
              fldNotes:
                'Teneo calco suffragium ubi repellendus defluo harum tempus teres ustilo caput mollitia carcer inventore accusator.',
              fldAssignee: null,
              fldStatus: {
                id: 'selInProgress',
                name: 'In progress',
                color: 'yellowLight2',
              },
              fldTableA: [
                {
                  id: 'recVirgilGreen',
                  name: 'Virgil Green',
                },
                {
                  id: 'recAlexanderHodki',
                  name: 'Alexander Hodkiewicz',
                },
                {
                  id: 'recGeoffreySatter',
                  name: 'Geoffrey Satterfield',
                },
                {
                  id: 'recTravisFay',
                  name: 'Travis Fay',
                },
              ],
            },
          },
          {
            id: 'recOrlandoGreenfe',
            commentCount: 0,
            createdTime: '2025-01-03T20:22:05.000Z',
            cellValuesByFieldId: {
              fldName2: 'Orlando Greenfelder',
              fldNotes:
                'Adsidue copiose explicabo bestia admoveo pel autus sortitus aro thymbra brevis aspicio utique coerceo caput.',
              fldAssignee: null,
              fldStatus: {
                id: 'selInProgress',
                name: 'In progress',
                color: 'yellowLight2',
              },
              fldTableA: [
                {
                  id: 'recVirgilGreen',
                  name: 'Virgil Green',
                },
                {
                  id: 'recMrAngelOkuneva',
                  name: 'Mr. Angel Okuneva',
                },
                {
                  id: 'recEmilioCorkery',
                  name: 'Emilio Corkery',
                },
                {
                  id: 'recAlexanderHodki',
                  name: 'Alexander Hodkiewicz',
                },
                {
                  id: 'recBridgetTurner',
                  name: 'Bridget Turner',
                },
                {
                  id: 'recGeoffreySatter',
                  name: 'Geoffrey Satterfield',
                },
                {
                  id: 'recGuadalupeDenes',
                  name: 'Guadalupe Denesik',
                },
              ],
            },
          },
          {
            id: 'recTheresaSteuber',
            commentCount: 0,
            createdTime: '2025-01-03T20:22:05.000Z',
            cellValuesByFieldId: {
              fldName2: 'Theresa Steuber',
              fldNotes:
                'Verus vorax consequuntur suus vitae armarium umbra odio repellendus tempora comprehendo atavus volo solitudo terebro.',
              fldAssignee: null,
              fldStatus: {
                id: 'selTodo',
                name: 'Todo',
                color: 'redLight2',
              },
              fldTableA: [
                {
                  id: 'recLindaDAmore',
                  name: "Linda D'Amore",
                },
                {
                  id: 'recVirgilGreen',
                  name: 'Virgil Green',
                },
                {
                  id: 'recMrAngelOkuneva',
                  name: 'Mr. Angel Okuneva',
                },
                {
                  id: 'recEmilioCorkery',
                  name: 'Emilio Corkery',
                },
                {
                  id: 'recAlexanderHodki',
                  name: 'Alexander Hodkiewicz',
                },
                {
                  id: 'recBridgetTurner',
                  name: 'Bridget Turner',
                },
                {
                  id: 'recGeoffreySatter',
                  name: 'Geoffrey Satterfield',
                },
                {
                  id: 'recTravisFay',
                  name: 'Travis Fay',
                },
                {
                  id: 'recGuadalupeDenes',
                  name: 'Guadalupe Denesik',
                },
              ],
            },
          },
        ],
      },
    ],
    collaborators: [
      {
        id: 'usrBettyGleason',
        name: 'Betty Gleason',
        email: 'betty.gleason@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrBettyGleason',
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
        id: 'usrAmyProhaska',
        name: 'Amy Prohaska',
        email: 'amy.prohaska@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrAmyProhaska',
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
      {
        id: 'usrClaudeBoehm',
        name: 'Claude Boehm',
        email: 'claude.boehm@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrClaudeBoehm',
        isActive: true,
      },
      {
        id: 'usrJuanThompson',
        name: 'Juan Thompson',
        email: 'juan.thompson@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrJuanThompson',
        isActive: true,
      },
      {
        id: 'usrDevinCollier',
        name: 'Devin Collier',
        email: 'devin.collier@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrDevinCollier',
        isActive: true,
      },
    ],
  },
}
