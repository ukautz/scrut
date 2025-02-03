(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[8401],{26795:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>ct});var i=s(96540),n=s(1003),r=s(89532),a=s(74848);const o=i.createContext(null);function c(t){let{children:e,content:s}=t;const n=function(t){return(0,i.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,contentTitle:t.contentTitle,toc:t.toc})),[t])}(s);return(0,a.jsx)(o.Provider,{value:n,children:e})}function l(){const t=(0,i.useContext)(o);if(null===t)throw new r.dV("DocProvider");return t}function p(){const{metadata:t,frontMatter:e,assets:s}=l();return(0,a.jsx)(n.be,{title:t.title,description:t.description,keywords:e.keywords,image:s.image??e.image})}var j=s(34164),_=s(24581),d=s(21312),S=s(28774);function u(t){const{permalink:e,title:s,subLabel:i,isNext:n}=t;return(0,a.jsxs)(S.default,{className:(0,j.A)("pagination-nav__link",n?"pagination-nav__link--next":"pagination-nav__link--prev"),to:e,children:[i&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,a.jsx)("div",{className:"pagination-nav__label",children:s})]})}function h(t){const{previous:e,next:s}=t;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[e&&(0,a.jsx)(u,{...e,subLabel:(0,a.jsx)(d.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,a.jsx)(u,{...s,subLabel:(0,a.jsx)(d.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x(){const{metadata:t}=l();return(0,a.jsx)(h,{previous:t.previous,next:t.next})}var m=s(44586),g=s(48295),y=s(17559),E=s(53886),b=s(23025);const C={unreleased:function(t){let{siteTitle:e,versionMetadata:s}=t;return(0,a.jsx)(d.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:(0,a.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(t){let{siteTitle:e,versionMetadata:s}=t;return(0,a.jsx)(d.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:(0,a.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function v(t){const e=C[t.versionMetadata.banner];return(0,a.jsx)(e,{...t})}function f(t){let{versionLabel:e,to:s,onClick:i}=t;return(0,a.jsx)(d.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:(0,a.jsx)("b",{children:(0,a.jsx)(S.default,{to:s,onClick:i,children:(0,a.jsx)(d.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function P(t){let{className:e,versionMetadata:s}=t;const{siteConfig:{title:i}}=(0,m.default)(),{pluginId:n}=(0,g.vT)({failfast:!0}),{savePreferredVersionName:r}=(0,E.g1)(n),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,g.HW)(n),l=o??(p=c).docs.find((t=>t.id===p.mainDocId));var p;return(0,a.jsxs)("div",{className:(0,j.A)(e,y.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,a.jsx)("div",{children:(0,a.jsx)(v,{siteTitle:i,versionMetadata:s})}),(0,a.jsx)("div",{className:"margin-top--md",children:(0,a.jsx)(f,{versionLabel:c.label,to:l.path,onClick:()=>r(c.name)})})]})}function B(t){let{className:e}=t;const s=(0,b.r)();return s.banner?(0,a.jsx)(P,{className:e,versionMetadata:s}):null}function M(t){let{className:e}=t;const s=(0,b.r)();return s.badge?(0,a.jsx)("span",{className:(0,j.A)(e,y.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,a.jsx)(d.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}const k={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function T(t){let{permalink:e,label:s,count:i,description:n}=t;return(0,a.jsxs)(S.default,{href:e,title:n,className:(0,j.A)(k.tag,i?k.tagWithCount:k.tagRegular),children:[s,i&&(0,a.jsx)("span",{children:i})]})}const L={tags:"tags_jXut",tag:"tag_QGVx"};function N(t){let{tags:e}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("b",{children:(0,a.jsx)(d.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,a.jsx)("ul",{className:(0,j.A)(L.tags,"padding--none","margin-left--sm"),children:e.map((t=>(0,a.jsx)("li",{className:L.tag,children:(0,a.jsx)(T,{...t})},t.permalink)))})]})}var G=s(44642);function A(){const{metadata:t}=l(),{editUrl:e,lastUpdatedAt:s,lastUpdatedBy:i,tags:n}=t,r=n.length>0,o=!!(e||s||i);return r||o?(0,a.jsxs)("footer",{className:(0,j.A)(y.G.docs.docFooter,"docusaurus-mt-lg"),children:[r&&(0,a.jsx)("div",{className:(0,j.A)("row margin-top--sm",y.G.docs.docFooterTagsRow),children:(0,a.jsx)("div",{className:"col",children:(0,a.jsx)(N,{tags:n})})}),o&&(0,a.jsx)(G.A,{className:(0,j.A)("margin-top--sm",y.G.docs.docFooterEditMetaRow),editUrl:e,lastUpdatedAt:s,lastUpdatedBy:i})]}):null}var O=s(41422),H=s(65195);const I={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function D(t){let{collapsed:e,...s}=t;return(0,a.jsx)("button",{type:"button",...s,className:(0,j.A)("clean-btn",I.tocCollapsibleButton,!e&&I.tocCollapsibleButtonExpanded,s.className),children:(0,a.jsx)(d.default,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const w={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function V(t){let{toc:e,className:s,minHeadingLevel:i,maxHeadingLevel:n}=t;const{collapsed:r,toggleCollapsed:o}=(0,O.u)({initialState:!0});return(0,a.jsxs)("div",{className:(0,j.A)(w.tocCollapsible,!r&&w.tocCollapsibleExpanded,s),children:[(0,a.jsx)(D,{collapsed:r,onClick:o}),(0,a.jsx)(O.N,{lazy:!0,className:w.tocCollapsibleContent,collapsed:r,children:(0,a.jsx)(H.A,{toc:e,minHeadingLevel:i,maxHeadingLevel:n})})]})}const K={tocMobile:"tocMobile_ITEo"};function U(){const{toc:t,frontMatter:e}=l();return(0,a.jsx)(V,{toc:t,minHeadingLevel:e.toc_min_heading_level,maxHeadingLevel:e.toc_max_heading_level,className:(0,j.A)(y.G.docs.docTocMobile,K.tocMobile)})}var W=s(67763);function R(){const{toc:t,frontMatter:e}=l();return(0,a.jsx)(W.A,{toc:t,minHeadingLevel:e.toc_min_heading_level,maxHeadingLevel:e.toc_max_heading_level,className:y.G.docs.docTocDesktop})}var F=s(51107),z=s(61823),Y=s.n(z);function q(t){let{children:e}=t;const s=function(){const{metadata:t,frontMatter:e,contentTitle:s}=l();return e.hide_title||void 0!==s?null:t.title}();return(0,a.jsxs)("div",{className:(0,j.A)(y.G.docs.docMarkdown,"markdown"),children:[s&&(0,a.jsx)("header",{children:(0,a.jsx)(F.A,{as:"h1",children:s})}),(0,a.jsx)(Y(),{children:e})]})}var J=s(26972),X=s(99169),Z=s(86025);function Q(t){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",...t,children:(0,a.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const $={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function tt(){const t=(0,Z.default)("/");return(0,a.jsx)("li",{className:"breadcrumbs__item",children:(0,a.jsx)(S.default,{"aria-label":(0,d.translate)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:t,children:(0,a.jsx)(Q,{className:$.breadcrumbHomeIcon})})})}const et={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function st(t){let{children:e,href:s,isLast:i}=t;const n="breadcrumbs__link";return i?(0,a.jsx)("span",{className:n,itemProp:"name",children:e}):s?(0,a.jsx)(S.default,{className:n,href:s,itemProp:"item",children:(0,a.jsx)("span",{itemProp:"name",children:e})}):(0,a.jsx)("span",{className:n,children:e})}function it(t){let{children:e,active:s,index:i,addMicrodata:n}=t;return(0,a.jsxs)("li",{...n&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,j.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[e,(0,a.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function nt(){const t=(0,J.OF)(),e=(0,X.Dt)();return t?(0,a.jsx)("nav",{className:(0,j.A)(y.G.docs.docBreadcrumbs,et.breadcrumbsContainer),"aria-label":(0,d.translate)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,a.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[e&&(0,a.jsx)(tt,{}),t.map(((e,s)=>{const i=s===t.length-1,n="category"===e.type&&e.linkUnlisted?void 0:e.href;return(0,a.jsx)(it,{active:i,index:s,addMicrodata:!!n,children:(0,a.jsx)(st,{href:n,isLast:i,children:e.label})},s)}))]})}):null}var rt=s(74454);const at={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ot(t){let{children:e}=t;const s=function(){const{frontMatter:t,toc:e}=l(),s=(0,_.l)(),i=t.hide_table_of_contents,n=!i&&e.length>0;return{hidden:i,mobile:n?(0,a.jsx)(U,{}):void 0,desktop:!n||"desktop"!==s&&"ssr"!==s?void 0:(0,a.jsx)(R,{})}}(),{metadata:i}=l();return(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:(0,j.A)("col",!s.hidden&&at.docItemCol),children:[(0,a.jsx)(rt.A,{metadata:i}),(0,a.jsx)(B,{}),(0,a.jsxs)("div",{className:at.docItemContainer,children:[(0,a.jsxs)("article",{children:[(0,a.jsx)(nt,{}),(0,a.jsx)(M,{}),s.mobile,(0,a.jsx)(q,{children:e}),(0,a.jsx)(A,{})]}),(0,a.jsx)(x,{})]})]}),s.desktop&&(0,a.jsx)("div",{className:"col col--3",children:s.desktop})]})}function ct(t){const e=`docs-doc-id-${t.content.metadata.id}`,s=t.content;return(0,a.jsx)(c,{content:t.content,children:(0,a.jsxs)(n.e3,{className:e,children:[(0,a.jsx)(p,{}),(0,a.jsx)(ot,{children:(0,a.jsx)(s,{})})]})})}},42268:function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=i(s(96540)),r=i(s(26795)),a=s(30863);e.default=function(t){return n.default.createElement(a.DocMetaProvider,{value:{frontMatter:t.content.frontMatter,metadata:t.content.metadata}},n.default.createElement(r.default,{...t}))}},26144:(t,e,s)=>{var i={"./Binary_Property/ASCII.js":49014,"./Binary_Property/ASCII_Hex_Digit.js":37662,"./Binary_Property/Alphabetic.js":32678,"./Binary_Property/Any.js":99247,"./Binary_Property/Assigned.js":19489,"./Binary_Property/Bidi_Control.js":91833,"./Binary_Property/Bidi_Mirrored.js":75e3,"./Binary_Property/Case_Ignorable.js":14817,"./Binary_Property/Cased.js":87053,"./Binary_Property/Changes_When_Casefolded.js":85928,"./Binary_Property/Changes_When_Casemapped.js":16773,"./Binary_Property/Changes_When_Lowercased.js":52277,"./Binary_Property/Changes_When_NFKC_Casefolded.js":71517,"./Binary_Property/Changes_When_Titlecased.js":69796,"./Binary_Property/Changes_When_Uppercased.js":514,"./Binary_Property/Dash.js":38105,"./Binary_Property/Default_Ignorable_Code_Point.js":72995,"./Binary_Property/Deprecated.js":54068,"./Binary_Property/Diacritic.js":23207,"./Binary_Property/Emoji.js":39767,"./Binary_Property/Emoji_Component.js":40751,"./Binary_Property/Emoji_Modifier.js":58167,"./Binary_Property/Emoji_Modifier_Base.js":38751,"./Binary_Property/Emoji_Presentation.js":85098,"./Binary_Property/Extended_Pictographic.js":55304,"./Binary_Property/Extender.js":1926,"./Binary_Property/Grapheme_Base.js":6906,"./Binary_Property/Grapheme_Extend.js":12435,"./Binary_Property/Hex_Digit.js":89310,"./Binary_Property/IDS_Binary_Operator.js":94634,"./Binary_Property/IDS_Trinary_Operator.js":22072,"./Binary_Property/ID_Continue.js":80382,"./Binary_Property/ID_Start.js":74279,"./Binary_Property/Ideographic.js":4366,"./Binary_Property/Join_Control.js":92207,"./Binary_Property/Logical_Order_Exception.js":84583,"./Binary_Property/Lowercase.js":52396,"./Binary_Property/Math.js":14715,"./Binary_Property/Noncharacter_Code_Point.js":60242,"./Binary_Property/Pattern_Syntax.js":70345,"./Binary_Property/Pattern_White_Space.js":54808,"./Binary_Property/Quotation_Mark.js":96687,"./Binary_Property/Radical.js":9107,"./Binary_Property/Regional_Indicator.js":74562,"./Binary_Property/Sentence_Terminal.js":11467,"./Binary_Property/Soft_Dotted.js":5480,"./Binary_Property/Terminal_Punctuation.js":59394,"./Binary_Property/Unified_Ideograph.js":63127,"./Binary_Property/Uppercase.js":48537,"./Binary_Property/Variation_Selector.js":97710,"./Binary_Property/White_Space.js":29317,"./Binary_Property/XID_Continue.js":30538,"./Binary_Property/XID_Start.js":97739,"./General_Category/Cased_Letter.js":86330,"./General_Category/Close_Punctuation.js":65764,"./General_Category/Connector_Punctuation.js":70751,"./General_Category/Control.js":24418,"./General_Category/Currency_Symbol.js":82787,"./General_Category/Dash_Punctuation.js":5788,"./General_Category/Decimal_Number.js":51182,"./General_Category/Enclosing_Mark.js":985,"./General_Category/Final_Punctuation.js":31328,"./General_Category/Format.js":56020,"./General_Category/Initial_Punctuation.js":7124,"./General_Category/Letter.js":14955,"./General_Category/Letter_Number.js":30867,"./General_Category/Line_Separator.js":68249,"./General_Category/Lowercase_Letter.js":46077,"./General_Category/Mark.js":13334,"./General_Category/Math_Symbol.js":2996,"./General_Category/Modifier_Letter.js":89893,"./General_Category/Modifier_Symbol.js":70449,"./General_Category/Nonspacing_Mark.js":43083,"./General_Category/Number.js":96934,"./General_Category/Open_Punctuation.js":29024,"./General_Category/Other.js":50673,"./General_Category/Other_Letter.js":29972,"./General_Category/Other_Number.js":69757,"./General_Category/Other_Punctuation.js":29570,"./General_Category/Other_Symbol.js":73736,"./General_Category/Paragraph_Separator.js":74293,"./General_Category/Private_Use.js":45808,"./General_Category/Punctuation.js":10795,"./General_Category/Separator.js":16832,"./General_Category/Space_Separator.js":54781,"./General_Category/Spacing_Mark.js":1540,"./General_Category/Surrogate.js":3401,"./General_Category/Symbol.js":11415,"./General_Category/Titlecase_Letter.js":52588,"./General_Category/Unassigned.js":90268,"./General_Category/Uppercase_Letter.js":33346,"./Script/Adlam.js":29500,"./Script/Ahom.js":89048,"./Script/Anatolian_Hieroglyphs.js":75287,"./Script/Arabic.js":92933,"./Script/Armenian.js":14998,"./Script/Avestan.js":94579,"./Script/Balinese.js":39522,"./Script/Bamum.js":69927,"./Script/Bassa_Vah.js":51551,"./Script/Batak.js":34862,"./Script/Bengali.js":2567,"./Script/Bhaiksuki.js":7944,"./Script/Bopomofo.js":26508,"./Script/Brahmi.js":87254,"./Script/Braille.js":41160,"./Script/Buginese.js":90169,"./Script/Buhid.js":7663,"./Script/Canadian_Aboriginal.js":89771,"./Script/Carian.js":59235,"./Script/Caucasian_Albanian.js":91118,"./Script/Chakma.js":65724,"./Script/Cham.js":23988,"./Script/Cherokee.js":57877,"./Script/Chorasmian.js":10774,"./Script/Common.js":44528,"./Script/Coptic.js":46183,"./Script/Cuneiform.js":20487,"./Script/Cypriot.js":99135,"./Script/Cypro_Minoan.js":76395,"./Script/Cyrillic.js":17144,"./Script/Deseret.js":43419,"./Script/Devanagari.js":59391,"./Script/Dives_Akuru.js":24563,"./Script/Dogra.js":88302,"./Script/Duployan.js":31997,"./Script/Egyptian_Hieroglyphs.js":35493,"./Script/Elbasan.js":55331,"./Script/Elymaic.js":20591,"./Script/Ethiopic.js":55096,"./Script/Georgian.js":90163,"./Script/Glagolitic.js":83308,"./Script/Gothic.js":23883,"./Script/Grantha.js":3176,"./Script/Greek.js":41449,"./Script/Gujarati.js":78402,"./Script/Gunjala_Gondi.js":50297,"./Script/Gurmukhi.js":1967,"./Script/Han.js":31050,"./Script/Hangul.js":82944,"./Script/Hanifi_Rohingya.js":34032,"./Script/Hanunoo.js":80963,"./Script/Hatran.js":91591,"./Script/Hebrew.js":32538,"./Script/Hiragana.js":39666,"./Script/Imperial_Aramaic.js":13963,"./Script/Inherited.js":60711,"./Script/Inscriptional_Pahlavi.js":74754,"./Script/Inscriptional_Parthian.js":75580,"./Script/Javanese.js":53524,"./Script/Kaithi.js":18679,"./Script/Kannada.js":70821,"./Script/Katakana.js":67115,"./Script/Kayah_Li.js":44109,"./Script/Kharoshthi.js":82044,"./Script/Khitan_Small_Script.js":95708,"./Script/Khmer.js":78576,"./Script/Khojki.js":959,"./Script/Khudawadi.js":48015,"./Script/Lao.js":71853,"./Script/Latin.js":56051,"./Script/Lepcha.js":53516,"./Script/Limbu.js":66566,"./Script/Linear_A.js":70308,"./Script/Linear_B.js":52365,"./Script/Lisu.js":43778,"./Script/Lycian.js":21257,"./Script/Lydian.js":9470,"./Script/Mahajani.js":35780,"./Script/Makasar.js":76741,"./Script/Malayalam.js":55170,"./Script/Mandaic.js":77654,"./Script/Manichaean.js":76932,"./Script/Marchen.js":99545,"./Script/Masaram_Gondi.js":45403,"./Script/Medefaidrin.js":38147,"./Script/Meetei_Mayek.js":35654,"./Script/Mende_Kikakui.js":48542,"./Script/Meroitic_Cursive.js":60577,"./Script/Meroitic_Hieroglyphs.js":70024,"./Script/Miao.js":27887,"./Script/Modi.js":84862,"./Script/Mongolian.js":22345,"./Script/Mro.js":74113,"./Script/Multani.js":19757,"./Script/Myanmar.js":32722,"./Script/Nabataean.js":44632,"./Script/Nandinagari.js":2651,"./Script/New_Tai_Lue.js":11351,"./Script/Newa.js":71508,"./Script/Nko.js":67185,"./Script/Nushu.js":62412,"./Script/Nyiakeng_Puachue_Hmong.js":40381,"./Script/Ogham.js":52861,"./Script/Ol_Chiki.js":52327,"./Script/Old_Hungarian.js":62446,"./Script/Old_Italic.js":12887,"./Script/Old_North_Arabian.js":96231,"./Script/Old_Permic.js":27981,"./Script/Old_Persian.js":97427,"./Script/Old_Sogdian.js":50396,"./Script/Old_South_Arabian.js":18137,"./Script/Old_Turkic.js":74767,"./Script/Old_Uyghur.js":52993,"./Script/Oriya.js":41271,"./Script/Osage.js":1444,"./Script/Osmanya.js":37881,"./Script/Pahawh_Hmong.js":92438,"./Script/Palmyrene.js":78658,"./Script/Pau_Cin_Hau.js":11251,"./Script/Phags_Pa.js":3404,"./Script/Phoenician.js":48223,"./Script/Psalter_Pahlavi.js":54806,"./Script/Rejang.js":74538,"./Script/Runic.js":47172,"./Script/Samaritan.js":27383,"./Script/Saurashtra.js":23384,"./Script/Sharada.js":19385,"./Script/Shavian.js":83533,"./Script/Siddham.js":92251,"./Script/SignWriting.js":31654,"./Script/Sinhala.js":47507,"./Script/Sogdian.js":68958,"./Script/Sora_Sompeng.js":62536,"./Script/Soyombo.js":29623,"./Script/Sundanese.js":49673,"./Script/Syloti_Nagri.js":55063,"./Script/Syriac.js":37136,"./Script/Tagalog.js":29078,"./Script/Tagbanwa.js":3784,"./Script/Tai_Le.js":49229,"./Script/Tai_Tham.js":91444,"./Script/Tai_Viet.js":29282,"./Script/Takri.js":85236,"./Script/Tamil.js":66346,"./Script/Tangsa.js":58493,"./Script/Tangut.js":54964,"./Script/Telugu.js":85321,"./Script/Thaana.js":13094,"./Script/Thai.js":29987,"./Script/Tibetan.js":60964,"./Script/Tifinagh.js":84173,"./Script/Tirhuta.js":98794,"./Script/Toto.js":4829,"./Script/Ugaritic.js":69495,"./Script/Vai.js":74949,"./Script/Vithkuqi.js":46386,"./Script/Wancho.js":24111,"./Script/Warang_Citi.js":61773,"./Script/Yezidi.js":37853,"./Script/Yi.js":30351,"./Script/Zanabazar_Square.js":22581,"./Script_Extensions/Adlam.js":66665,"./Script_Extensions/Ahom.js":70435,"./Script_Extensions/Anatolian_Hieroglyphs.js":48526,"./Script_Extensions/Arabic.js":49058,"./Script_Extensions/Armenian.js":76069,"./Script_Extensions/Avestan.js":95682,"./Script_Extensions/Balinese.js":33585,"./Script_Extensions/Bamum.js":20974,"./Script_Extensions/Bassa_Vah.js":75886,"./Script_Extensions/Batak.js":55455,"./Script_Extensions/Bengali.js":94426,"./Script_Extensions/Bhaiksuki.js":91965,"./Script_Extensions/Bopomofo.js":14487,"./Script_Extensions/Brahmi.js":30929,"./Script_Extensions/Braille.js":29577,"./Script_Extensions/Buginese.js":42970,"./Script_Extensions/Buhid.js":79470,"./Script_Extensions/Canadian_Aboriginal.js":35074,"./Script_Extensions/Carian.js":56308,"./Script_Extensions/Caucasian_Albanian.js":35549,"./Script_Extensions/Chakma.js":64003,"./Script_Extensions/Cham.js":97287,"./Script_Extensions/Cherokee.js":4606,"./Script_Extensions/Chorasmian.js":23201,"./Script_Extensions/Common.js":5107,"./Script_Extensions/Coptic.js":50148,"./Script_Extensions/Cuneiform.js":8990,"./Script_Extensions/Cypriot.js":15246,"./Script_Extensions/Cypro_Minoan.js":12736,"./Script_Extensions/Cyrillic.js":39695,"./Script_Extensions/Deseret.js":73002,"./Script_Extensions/Devanagari.js":54732,"./Script_Extensions/Dives_Akuru.js":77358,"./Script_Extensions/Dogra.js":96095,"./Script_Extensions/Duployan.js":73642,"./Script_Extensions/Egyptian_Hieroglyphs.js":2206,"./Script_Extensions/Elbasan.js":88354,"./Script_Extensions/Elymaic.js":22446,"./Script_Extensions/Ethiopic.js":23839,"./Script_Extensions/Georgian.js":58320,"./Script_Extensions/Glagolitic.js":36799,"./Script_Extensions/Gothic.js":68384,"./Script_Extensions/Grantha.js":44685,"./Script_Extensions/Greek.js":35272,"./Script_Extensions/Gujarati.js":77721,"./Script_Extensions/Gunjala_Gondi.js":88472,"./Script_Extensions/Gurmukhi.js":62080,"./Script_Extensions/Han.js":9867,"./Script_Extensions/Hangul.js":30359,"./Script_Extensions/Hanifi_Rohingya.js":2733,"./Script_Extensions/Hanunoo.js":27350,"./Script_Extensions/Hatran.js":57508,"./Script_Extensions/Hebrew.js":61521,"./Script_Extensions/Hiragana.js":2465,"./Script_Extensions/Imperial_Aramaic.js":69052,"./Script_Extensions/Inherited.js":40410,"./Script_Extensions/Inscriptional_Pahlavi.js":63479,"./Script_Extensions/Inscriptional_Parthian.js":13219,"./Script_Extensions/Javanese.js":66903,"./Script_Extensions/Kaithi.js":90956,"./Script_Extensions/Kannada.js":39276,"./Script_Extensions/Katakana.js":89232,"./Script_Extensions/Kayah_Li.js":74722,"./Script_Extensions/Kharoshthi.js":31615,"./Script_Extensions/Khitan_Small_Script.js":86465,"./Script_Extensions/Khmer.js":78981,"./Script_Extensions/Khojki.js":16352,"./Script_Extensions/Khudawadi.js":40906,"./Script_Extensions/Lao.js":16480,"./Script_Extensions/Latin.js":39866,"./Script_Extensions/Lepcha.js":75179,"./Script_Extensions/Limbu.js":89563,"./Script_Extensions/Linear_A.js":13355,"./Script_Extensions/Linear_B.js":12142,"./Script_Extensions/Lisu.js":43529,"./Script_Extensions/Lycian.js":37462,"./Script_Extensions/Lydian.js":93825,"./Script_Extensions/Mahajani.js":85351,"./Script_Extensions/Makasar.js":4056,"./Script_Extensions/Malayalam.js":67947,"./Script_Extensions/Mandaic.js":36071,"./Script_Extensions/Manichaean.js":42419,"./Script_Extensions/Marchen.js":43128,"./Script_Extensions/Masaram_Gondi.js":77506,"./Script_Extensions/Medefaidrin.js":60674,"./Script_Extensions/Meetei_Mayek.js":37065,"./Script_Extensions/Mende_Kikakui.js":8435,"./Script_Extensions/Meroitic_Cursive.js":92834,"./Script_Extensions/Meroitic_Hieroglyphs.js":47835,"./Script_Extensions/Miao.js":90848,"./Script_Extensions/Modi.js":77953,"./Script_Extensions/Mongolian.js":716,"./Script_Extensions/Mro.js":68896,"./Script_Extensions/Multani.js":43196,"./Script_Extensions/Myanmar.js":53447,"./Script_Extensions/Nabataean.js":46301,"./Script_Extensions/Nandinagari.js":78830,"./Script_Extensions/New_Tai_Lue.js":64766,"./Script_Extensions/Newa.js":65879,"./Script_Extensions/Nko.js":17568,"./Script_Extensions/Nushu.js":50073,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":17122,"./Script_Extensions/Ogham.js":45292,"./Script_Extensions/Ol_Chiki.js":60296,"./Script_Extensions/Old_Hungarian.js":17171,"./Script_Extensions/Old_Italic.js":50972,"./Script_Extensions/Old_North_Arabian.js":8010,"./Script_Extensions/Old_Permic.js":3894,"./Script_Extensions/Old_Persian.js":49490,"./Script_Extensions/Old_Sogdian.js":92033,"./Script_Extensions/Old_South_Arabian.js":39168,"./Script_Extensions/Old_Turkic.js":31800,"./Script_Extensions/Old_Uyghur.js":96066,"./Script_Extensions/Oriya.js":33658,"./Script_Extensions/Osage.js":79193,"./Script_Extensions/Osmanya.js":85064,"./Script_Extensions/Pahawh_Hmong.js":93701,"./Script_Extensions/Palmyrene.js":68235,"./Script_Extensions/Pau_Cin_Hau.js":45866,"./Script_Extensions/Phags_Pa.js":40447,"./Script_Extensions/Phoenician.js":96848,"./Script_Extensions/Psalter_Pahlavi.js":70147,"./Script_Extensions/Rejang.js":90165,"./Script_Extensions/Runic.js":17953,"./Script_Extensions/Samaritan.js":43926,"./Script_Extensions/Saurashtra.js":1624,"./Script_Extensions/Sharada.js":4888,"./Script_Extensions/Shavian.js":96404,"./Script_Extensions/Siddham.js":6546,"./Script_Extensions/SignWriting.js":99747,"./Script_Extensions/Sinhala.js":41818,"./Script_Extensions/Sogdian.js":22619,"./Script_Extensions/Sora_Sompeng.js":97375,"./Script_Extensions/Soyombo.js":11386,"./Script_Extensions/Sundanese.js":57308,"./Script_Extensions/Syloti_Nagri.js":51032,"./Script_Extensions/Syriac.js":67007,"./Script_Extensions/Tagalog.js":82147,"./Script_Extensions/Tagbanwa.js":1755,"./Script_Extensions/Tai_Le.js":54266,"./Script_Extensions/Tai_Tham.js":28491,"./Script_Extensions/Tai_Viet.js":40261,"./Script_Extensions/Takri.js":35429,"./Script_Extensions/Tamil.js":30259,"./Script_Extensions/Tangsa.js":95218,"./Script_Extensions/Tangut.js":23875,"./Script_Extensions/Telugu.js":22730,"./Script_Extensions/Thaana.js":36389,"./Script_Extensions/Thai.js":49096,"./Script_Extensions/Tibetan.js":27545,"./Script_Extensions/Tifinagh.js":42806,"./Script_Extensions/Tirhuta.js":15683,"./Script_Extensions/Toto.js":31278,"./Script_Extensions/Ugaritic.js":61144,"./Script_Extensions/Vai.js":96152,"./Script_Extensions/Vithkuqi.js":16689,"./Script_Extensions/Wancho.js":19428,"./Script_Extensions/Warang_Citi.js":51792,"./Script_Extensions/Yezidi.js":42990,"./Script_Extensions/Yi.js":89492,"./Script_Extensions/Zanabazar_Square.js":93786,"./index.js":49473,"./unicode-version.js":13899};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id=26144},66590:()=>{}}]);