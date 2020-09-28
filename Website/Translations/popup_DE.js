import getAllAvailableModulesNames from '../Functions/getAllAvailableModulesNames';

const len = getAllAvailableModulesNames().length-1;

const DE = {
    back_404: 'Startseite',
    functions: 'Funktionen',
    components: 'Komponente',
    description_uuid: 'Die Funktion uuid gibt immer eine eindeutige Zeichenfolge zurück, die auf einer Zufallszahl und dem aktuellen Zeitstempel basiert.',
    description_disableHtmlScroll: 'Der HTML Tag bekommt die Attribute: class="overflow-hidden" und style="overflow: hidden;" damit ein Benutzer innerhalb der Webseite nicht scrollen darf.',
    description_enableHtmlScroll: 'Dem HTML Tag wird die Klasse "overflow-hidden" entfernt und der Style: "overflow: hidden;". Der Benutzer hat wieder die Möglichkeit innerhalb der Website zu scrollen.',
    description_scrollTopListener: "Scrollen Sie bei jeder Änderung des Speicherorts (window.location) zum Anfang der aktuellen Seite. Zu Beginn muss die Funktion aufgerufen werden, um den Listener für Standortänderungen zu initialisieren. Diese Funktion benötigt 3 zusätzliche Argumente. Argument 1: Zeit (in Millisekunden), um zum Seitenanfang zu scrollen, Argument 2: Bildlaufverhalten - 'auto','smooth','inherit','initial','unset', Argument 3: Entfernen Sie den Listener (boolean). Um den Listener zu entfernen, übergeben Sie dem Wert 3 den Wert true (standardmäßig wird der Wert auf false gesetzt).",
    description_urlExtract: 'Extrahiert die URL auf einzelen Pfade des window.location, Schlüssel und dessen Werte. Die Funktion erhällt 1 optionales Argument: isHashRouter (boolean) - standardmäßig ist der übergebene Wert undefined. Diese Funktion extrahiert Pfade und Schlüsselwerte für die window.location: "href", "hash" und "path".',
    is: 'ist',
    iconTokenFrom: 'Icon entnommen von',
    openSourceText: 'Ein kostenloses Open Source Projekt',
    changeLanguageTitle: 'Sprache ändern',
    changeTintTitle: 'Layout ändern',
    lightTheme: 'Hell',
    darkTheme: 'Dunkel',
    searchForModule: 'Module Suche',
    clickToNavToTheModule: 'Navigieren Sie zu diesem Modul',
    fast: 'Schnell',
    light: 'Leicht',
    interactive: 'Interaktiv',
    "fast.description" : "Minimale Zeit der Generierung und Optimale Source Nutzung des Browsers.",
    "light.description" : `Diese Bibliothek hat eine Anzahl von ${len} Modulen une eine Gesamtgröße von unter 190 KB.`,
    "interactive.description" : "Jedes Modul kann frei gestaltet werden und beinhaltet benutzerdefinierte Callback Funktionen.",
    exampleOfUsage: 'Beispiel Benutzung',
    copyToClipboard: 'Zwischenspeichern',
    installation: 'Installation',
    documentation: 'Dokumenation',
    modules: 'Module',
    getStarted: 'Jetzt Anfangen',
    installation: 'Installation',
    feedback: 'Feedback',
    usefullLinks: 'Nützliche Links',
    rights: 'Rechte',
    rigthsText: 'Alle Rechte vorbehalten',
    author: 'Author',
    exampleTitle: 'Anwendungsbeispiel',
    reactCodeTitle: 'React Code',
    reactFunctionTitle: 'Funktionen Code',
    cssCodeTitle: 'CSS Code',
    jsCodeTitle: 'Javascript Code',
    loading: 'Laden...',
    keyUsageTitle: 'Keys Erläuterungen',
    "table.title.key" : 'Schlüssel',
    "table.title.description" : 'Beschreibung',
    "table.title.type" : 'Typ',
    "table.title.default" : 'Standard',
    /**
     * Module keys
     */
    "id": {
        "description": 'Setzte eine id für das Root Element dieses Modules.',
        "type": 'String',
        "default": '<leere Zeichenfolge>'
    },
    "class": {
        "description": 'Ersetze die Hauptklasse gegen eine eigene. Falls dies genutzt wird, greifen die Standard Styles, die das Module mitbringt, nicht mehr.',
        "type": 'String',
        "default": ''
    },
    "addClass": {
        "description": 'Setzte eine zusätzliche Klasse für das Root Element dieses Modules.',
        "type": 'String',
        "default": '<leere Zeichenfolge>'
    },
    "inputanimation.callback": {
        "description": "Benutzerdefinierte definierte Funktionen werden jedes Mal aufgerufen, wenn sich die Eingabe geändert hat. Diese Funktion gibt 1 Argument zurück - den aktuellen Wert des Eingabefelds.",
        "type": "Funktion",
        "default": "undefined"
    },
    "accordion.animation": {
        "description": "Eine Animation wärend des aufklappens und zuklappens des Accordions. Animationen die verwendet werden können: 'height', 'scale', 'opacity'.",
        "type": "String",
        "default": "undefined"
    },
    "accordion.data": {
        "description": "Hauptdaten.",
        "type": "Array",
        "default": "[]"
    },
    'accordion.data.href': {
        "description": "Ein <a> - oder <Link> -Tag umgibt die Texteingabe, um den Benutzer in Ihrer App zu navigieren.",
        "type": "String",
        "default": "undefined"
    },
    'accordion.data.icon': {
        "description": "Benutzerdefinierte JSX-Daten auf der linken Seite der Texteingabe.",
        "type": "JSX | String",
        "default": "undefined"
    },
    'accordion.data.text' : {
        "description": "Der anzuzeigende Text bevor ein Kind Element aufgeklappt wird.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    'accordion.data.dataToggle' : {
        "description": "Der anzuzeigende Inhalt eines Elementes nachdem das Mutter Element aufgeklappt wurde.",
        "type": "String | JSX ",
        "default": "<leere Zeichenfolge>"
    },
    'accordion.data.toggled' : {
        "description": "Ist das Element ge-toggelt order nicht.",
        "type": "Boolean",
        "default": "False"
    },
    'props' : {
        "description": "Die HTML Eigenschaften des HTML Elementes.",
        "type": "Object",
        "default": "{}"
    },
    "itemsPerLine": {
        "description": "Wie viele Elemente sollen in einer Zeile angezeigt werden.",
        "type": "Number",
        "default": "3"
    },
    "mediaBreak": {
        "description": "Falls dieser Wert mitgegeben wird, wird das Module interaktiv. Standard mäßig wird das Mutter Element mit der Klasse gerendert: 'flex-row'. Bei der Erreichung des Media Break Points, wird das Mutter Element neu gerender mit der Klasse: flex-column.",
        "type": "Number",
        "default": "undefined"
    },
    "data": {
        "description": "Hauptdaten - Array von Objekten.",
        "type": "Array",
        "default": "[]"
    },
    "cards.data": {
        "description": "Hauptdaten - Array von Objekten.",
        "type": "Array",
        "default": "[]"
    },
    "cards.data.title": {
        "description": "Benutzerdefinierte Kartenkopfdaten.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "cards.data.content": {
        "description": "Inhaltsdaten für benutzerdefinierte Karten.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "cards.data.footer": {
        "description": "Fußzeilendaten für benutzerdefinierte Karten.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "defaultItems": {
        "description": "Wie viele Elemente sollen direkt beim ersten Laden angezeigt werden.",
        "type": "Number",
        "default": "3"
    },
    "loadonscroll.data": {
        "description": "Benutzerdefinierte Daten, die beim ersten Mal gerendert werden sollen.",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "minify": {
        "description": "Wenn der Benutzer nach unten scrollt, werden Daten nachgeladen. Das NAchladen der Daten kann beschläunigt werden, in dem man hier einen PIXEL Wert hinzufügt.",
        "type": "Number",
        "default": "0"
    },
    "loadMoreCallback": {
        "description": "Falls das Root Element bis ganz nach unten ge-scrollt wurde, können Daten nachgeladen werden. Falls der Callback 'break' als Antwort liefert, wird der Scroll Event von dem Root Element entfernt.",
        "type": "Function",
        "default": "undefined"
    },
    "loadMoreLoadingIcon": {
        "description": "Wärend zusätzliche Elemente geladen werden, kann ein eigen definiertes JSX Element gerendert werden.",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "customsuggestion.callback": {
        "description": "Nachdem eine Änderung im Input Feld statt findet, wird diese Übergebene Funktion aufgerufen mit 1 Paramater: Wert des Input Feldes. Der Callback muss eine Liste and Objecten zurück liefern. Die Struktur ist im 'suggestions' Key beschrieben.",
        "type": "Function",
        "default": "undefined"
    },
    "customsuggestion.suggestions": {
        "description": "Liste von Objecten",
        "type": "Array",
        "default": "undefined"
    },
    "customsuggestion.suggestions.href": {
        "description": "Der Benutzerdefinierte Vorschlag wird mit einem A Tag umfasst, damit der Benutzer direkt einem Vorschlag folgen kann.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.suggestions.jsx": {
        "description": "Benutzerdefiniertes HTML das der Endanwender sieht.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.suggestions.props": {
        "description": "Die HTML Eigenschaften des HTML Elementes.",
        "type": "Object",
        "default": "{}"
    },
    "customsuggestion.suggestions.onClickValue": {
        "description": "Wert, der in das Input Feld geschrieben werden soll, wenn ein Click Event statt findet.",
        "type": "String",
        "default": "undefined"
    },
    "clipboard": {
        "description": "Daten die in den Cipboard zwischen gespeichert werden sollen. Wenn diese Daten vom Typ kein String sind, werden diese in den Zwischenspeicher mit JSON.strigify gespeichert.",
        "type": "String | Array | Object | Number",
        "default": "undefined"
    },
    "clipboard.data": {
        "description": "Custom JSX.",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "clipboard.animation": {
        "description": "Eine Animation, wenn ein Klickereignis für die benutzerdefinierten 'Daten' ausgelöst wird. Animationen, die verwendet werden können: 'skalieren', 'springen'.",
        "type": "String",
        "default": "undefined"
    },
    "plainValue": {
        "description": "Der Wert des Input Feldes.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "inputsuggestionarray.callbackSelection": {
        "description": "Benutzerdefinierte Funktion dam dem ein Element ausgewählt wurde. Diese Function liefert 1 Argument. Argument 1: Liste der Ausgewählten Elemente (angeklickten Element).",
        "type": "Function",
        "default": "undefined"
    },
    "inputsuggestionobject.callbackSelection": {
        "description": "Benutzerdefinierte Funktion dam dem ein Element ausgewählt wurde. Diese Function liefert 1 Argument. Argument 1: Liste der Ausgewählten Elemente (angeklickten Element).",
        "type": "Function",
        "default": "undefined"
    },
    "inputPlaceholder": {
        "description": "Platzhalter.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "inputType": {
        "description": "Typ eines Inptu Feldes.",
        "type": "String",
        "default": "text"
    },
    "callbackRerender": {
        "description": "Wenn true, dann hört das Modul nur auf den bergebenen State und die State Änderungen. Wenn False, dann erwartet das Modul Daten aus dem Callback die weiter verarbeitet werden.",
        "type": "Boolean",
        "default": "False"
    },
    "allowOnlyAZ": {
        "description": "Falls true, dann wird folgendes Regex auf den Wert der Input Feldes angewandt: (/[^a-zA-Z ]/gmi).",
        "type": "Boolean",
        "default": "False"
    },
    "display": {
        "description": "Soll das Element angezeigt werden oder nicht.",
        "type": "Boolean",
        "default": "False"
    },
    "lineNumber": {
        "description": "Erlaube das rendern, auf der Linken Seite, jeder Zeilen Nummer.",
        "type": "Boolean",
        "default": "False"
    },
    "iconClose": {
        "description": "Benutzer definiertes HTML mit der Aktion das Module 'zu schließenden'.",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "inputActive": {
        "description": "Soll das Input Feld mit angezeigt werden oder nicht.",
        "type": "Boolean",
        "default": "False"
    },
    "noDataText": {
        "description": "Falls keine Elemente gefunden wurden, dann wird dieser Text angezeigt.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "callbackClose": {
        "description": "Benutzer definierte Funktion, die ohne Argumente aufgerufen wird, nachdem dass Element geschlossen wurde.",
        "type": "Function",
        "default": "undefined"
    },
    "listarray.callback": {
        "description": "Benutzerdefinierte Rückruffunktionen werden ausgelöst, wenn der Benutzer auf ein Listenelement klickt. Die Funktion gibt 2 Argumente zurück. Argument 1: Klickereignis, Argument 2: geklickter Eintrag.",
        "type": "Funktion",
        "default": "undefined"
    },
    "listarray.data": {
        "description": "Array der anzuzeigenden Zeichenfolgen (Werte).",
        "type": "Array",
        "default": "[]"
    },
    "listobject.data": {
        "description": "Array of Objects.",
        "type": "Array",
        "default": "[]"
    },
    "listobject.data.text": {
        "description": "Hauptzeichenfolge, die angezeigt werden soll.",
        "type": "String",
        "default": "undefined"
    },
    "closeOnCallback": {
        "description": "Falls ein Element aus der List ausgewählt wird, soll das Modul auch geschlossen werden oder soll die Anzeige des Modules beibehaltet werden.",
        "type": "Boolean",
        "default": "False"
    },
    "closeOnDimmedClick": {
        "description": "Bei dem Anklicken des 'dunklen' HTML`s, das ausserum des Content Bereiches sicht befindet, wird das Module icht mehr angezeigt.",
        "type": "Boolean",
        "default": "False"
    },
    "closeOnEsc": {
        "description": "Beim Drücken der 'Escape' Taste, soll das Module eiterhin angezeigt werden oder die Anzeige soll unterbrochen werden.",
        "type": "Boolean",
        "default": "False"
    },
    "inputEmptyOnCallback": {
        "description": "Nachdem ein Element aus der List ausgewählt wurde, soll das Input Feld gelehrt werden oder der Wert des Input Feldes soll unverändert bleiben.",
        "type": "Boolean",
        "default": "False"
    },
    "closeOnClick": {
        "description": "Wenn die verdunkelte HTML Area angeklickt wird, wird das Modul nicht mehr angezeigt.",
        "type": "Boolean",
        "default": "True"
    },
    "fullscreenOverlay.animation": {
        "description": "Eine Animation wärend des renders des Modules. Animationen die verwendet werden können: 'scale','left','top','right', 'bottom'.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "popupbox.data": {
        "description": "Benutzerdefinierte JSX-Daten in der umgeschalteten Box.",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "popupbox.animation": {
        "description": "Eine Animation wärend des renders des Modules. Animationen die verwendet werden können: 'top-left', 'top-right', 'bottom-left', 'bottom-right'.",
        "type": "String",
        "default": "top-left"
    },
    "fullscreenoverlay.dimmed": {
        "description": "Soll die leicht gedunkelte Bereich angezeigt werden oder nicht.",
        "type": "Boolean",
        "default": "False"
    },
    "fullscreenoverlay.data": {
        "description": "Benutzerdefinierte JSX-Daten, die im Overlay angezeigt werden sollen.",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "disableScroll": {
        "description": "Während der Anzeige des Modules, soll das HTML Element (Tag) scrollbar sein oder nicht.",
        "type": "Boolean",
        "default": "False"
    },
    "messageKey": {
        "description": "Ein unique string.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "codeMapping": {
        "description": "Object",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.title": {
        "description": "Title der Meldung",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.displayErrorCode": {
        "description": "Soll der Kod der Übergebenene Meldung auch angezeigt werden oder nicht.",
        "type": "Boolean",
        "default": "undefined"
    },
    "codeMapping.text": {
        "description": "Object - Anzuzeigender Text als Meldung.",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.text.prefix": {
        "description": "Prefix - Text vor der eigentlichen Medlung.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.text.suffix": {
        "description": "Suffix - Text nach der eigentlichen Medlung.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.text.props": {
        "description": "Die HTML Eigenschaften des HTML Elementes.",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.close": {
        "description": "Object - Text um die Mitteilungs Box zu schließen.",
        "type": "Object",
        "default": "undefined"
    },
    "codeMapping.close.text": {
        "description": "Text zur Schließung der angezeigt werden soll. Auf diesem Text ist ein 'click close Event' beigefügt.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.close.props": {
        "description": "Die HTML Eigenschaften des HTML Elementes.",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.link": {
        "description": "Object - Externer Link.",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.link.text": {
        "description": "Der anzuzeigender Text.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.link.useTagLink": {
        "description": "Soll der Tag <Link> benutzt werden, falls sich das Modul innerhalb eines Routes beweget oder standartmäßig eine <a> Tag.",
        "type": "Boolean",
        "default": "False"
    },
    "codeMapping.link.href": {
        "description": "Das Attribut 'to' im <Link> Tag oder 'href' im <a> Tag.",
        "type": "Object",
        "default": "{}"
    },
    "timer": {
        "description": "Interval um Fehlermeldungen anzuzeigen.",
        "type": "Number",
        "default": "2500"
    },
    "iconsType": {
        "description": "Standard angeklicktes Icons Set beim ersten rendern des Modules.",
        "type": "String",
        "default": "Smileys"
    },
    "displayTabs": {
        "description": "Sollen die Überschriften aller anzuzeigenden Icons Sets eingeblender oder ausgeblendet werden.",
        "type": "Boolean",
        "default": "True"
    },
    "renderItems": {
        "description": "Welche Elemente sollen standardmäßig angezeigt werden.",
        "type": "Array",
        "default": "'Smileys', 'Peoples','Animals', 'Plants', 'Nature', 'Food', 'Activity', 'Travel', 'Objects','Symbols', 'Currency', 'Arrows', 'Html'"
    },
    "translations": {
        "description": "Übersetzungen für die jeweiligen Überschriften der Icons Sets.",
        "type": "Object",
        "default": "undefined"
    },
    "custom": {
        "description": "Benutzer definierte Icons Sets als Array aus Objekten.",
        "type": "Array",
        "default": "undefined"
    },
    "custom.title": {
        "description": "Titel des Icons Set als unique Key.",
        "type": "String",
        "default": "undefined"
    },
    "custom.data": {
        "description": "Array aus Strings mit benutzerdefinierten Icons.",
        "type": "Array",
        "default": "undefined"
    },
    "defaultClassOrigin": {
        "description": "",
        "type": "String",
        "default": ""
    },
    "animatePlaceholder": {
        "description": "Platzhalter (der dann auch animiert wird).",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "onEnter": {
        "description": "Benutzerdefinierte Funktion wenn der Benutzer Enter drückt innerhalb des Input Feldes. Diese Funktion liefert 1 Argument: der aktuelle Wert des Input Feldes.",
        "type": "Function",
        "default": "undefined"
    },
    "getValueFromCallback": {
        "description": "Wenn False, dann hört das Modul nur auf den bergebenen State und die State Änderungen. Wenn true, dann erwartet das Modul Daten aus dem Callback die weiter verarbeitet werden.",
        "type": "Boolean",
        "default": "False"
    },
    "allowedFileSize": {
        "description": "Maximale Größe einer Datei.",
        "type": "String",
        "default": "undefined"
    },
    "allowedFileSizeDescriptor": {
        "description": "Größen Vektor: B, KB, MB, GB, TB oder PT.",
        "type": "String",
        "default": "undefined"
    },
    "allowedFiles": {
        "description": "Datei Typen die erlaubt sind.",
        "type": "String",
        "default": "undefined"
    },
    "label": {
        "description": "Das anzuzeigende JSX innerhalb eine <label> Tags",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "readFileCallback": {
        "description": "Benutzerdefinierte Funktion um eine Datei zu verarbeiten. Es werden 2 Argumente übergeben: Argument 1: Die Datei, Argument 2: Der Dateityp.",
        "type": "Function",
        "default": "undefined"
    },
    "errorCallback": {
        "description": "Benutzerdefiniertes Callback wärend eines Fehlers beim Datei Handling. Es übergibt 2 Argumente. Argument 1: Fehlertyp (unsupported_filetype, maximum_filesize_reached, unrecognized_filetype, empty_filecontent, empty_filename), Argumnt 2: 'errorCallbackCustomData'",
        "type": "Function",
        "default": "undefined"
    },
    "errorCallbackCustomData": {
        "description": "Benutzerdefinierter Wert für den 2 Argument der Funktion: 'errorCallback'.",
        "type": "String | Array | Object | Number",
        "default": "undefined"
    },
    "multiple": {
        "description": "Erlaube mehrere Dateien auf einmal.",
        "type": "Boolean",
        "default": "False"
    },
    "isDraggingData": {
        "description": "Wenn ein Benutzer aktuell im Status 'dragging' ist, dann kann eine Benutzerdefiniertes JSX angezeigt werden.",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "uploadOnClick": {
        "description": "Erlaube auch das Verarbeiten von Dateien wenn der Benutzer auf den 'Drag & Drop' Bereich ein Klick Event durchführt.",
        "type": "Boolean",
        "default": "False"
    },
    "selected": {
        "description": "Ein Array mit ausgewählten Elementen aus der Liste.",
        "type": "Array",
        "default": "[]"
    },
    "suggestionsToFilter": {
        "description": "Ein Array aus Elementen (Strings) die danach zur Auswahl für den Benutzer erscheinen.",
        "type": "Array",
        "default": "[]"
    },
    "emptySuggestionAfterSelection": {
        "description": "Leehre die Vorschläge nachdem der Benutzer ein Element angeklickt hat.",
        "type": "Boolen",
        "default": "True"
    },
    "sortSelected": {
        "description": "Sollen die ausgewählten Elemente Alphabetisch sortiert werden. Erlaubte Sortierungs Möglichkeiten: 'asc', 'desc'.",
        "type": "String",
        "default": "undefined"
    },
    "sortSuggestions": {
        "description": "Sollen die anzuzeigenden Elemente Alphabetisch sortiert werden. Erlaubte Sortierungs Möglichkeiten: 'asc', 'desc'.",
        "type": "String",
        "default": "undefined"
    },
    "text": {
        "description": "Der anzuzeigende Text.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "scrollReference": {
        "description": "Wenn true, dann wird das Root Element des Modules als Referenz genommen ansonsten das HTML document Elment.",
        "type": "Boolean",
        "default": "True"
    },
    "reactRouter": {
        "description": "Wenn true - (dann bewegt sich das Module innerhalb eines Rect Router) wird ein <Link> Tag gerendert, wenn False wird ein <a> Tag gerendert.",
        "type": "Boolean",
        "default": "False"
    },
    "icon": {
        "description": "Benutzerdefiniertes JSX um das Modul zu schließen.",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "iconCallback": {
        "description": "Benutzerdefiniertes Callback wenn das 'icon' angeglickt wrid.",
        "type": "Function",
        "default": "undefined"
    },
    "animationTime": {
        "description": "Zeit der Animation in ms.",
        "type": "Number",
        "default": "300"
    },
    "image": {
        "description": "JSX des Images/ Icons.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "moduleMenu": {
        "description": "Das eingebetete 'MenuClickHorizontal' Modul.",
        "type": "JSX",
        "default": "undefined"
    },
    "textLong": {
        "description": "Langer Text als Überschrift neben dem Foto.",
        "type": "String",
        "default": "undefined"
    },
    "textShort": {
        "description": "Kurzer Text unter der Überschrift und auch neben dem Foto.",
        "type": "String",
        "default": "undefined"
    },
    "href": {
        "description": "Wenn href gesetzt ist, dann wird um das Foto und den Text ein <a> gespannt.",
        "type": "String",
        "default": "undefined"
    },
    "hrefProps": {
        "description": "Die HTML Eigenschaften des <a> Tags.",
        "type": "Object",
        "default": "{}"
    },
    "title": {
        "description": "Array von Strings - Tabellenüberschrift.",
        "type": "Array",
        "default": "undefined"
    },
    "writer.text": {
        "description": "Zu schreibender Text.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "speed": {
        "description": "Speed of the text writer in ms.",
        "type": "Number",
        "default": "300"
    },
    "pipeDisplay": {
        "description": "Display the pipe while writing.",
        "type": "Boolen",
        "default": "True"
    },
    "pipeChar": {
        "description": "Charachter of the pipe",
        "type": "String | JSX",
        "default": "|"
    },
    "pipeSite": {
        "description": "Pipe auf der Site anzeigen: 'left', 'right'",
        "type": "String",
        "default": "right"
    },
    "pipePersist": {
        "description": "Persist the pipe after the text was written.",
        "type": "Boolean",
        "default": "False"
    },
    "replaces": {
        "description": "Object - Replace Text after, the text was written.",
        "type": "Object",
        "default": "undefined"
    },
    "replaces.from": {
        "description": "Start replacement on this char.",
        "type": "Number",
        "default": "undefined"
    },
    "replaces.to": {
        "description": "End replacement on this char.",
        "type": "Number",
        "default": "undefined"
    },
    "replaces.replace": {
        "description": "Text to write as replacement.",
        "type": "String",
        "default": "undefined"
    },
    "writer.timeout": {
        "description": "Start writing text after this time in ms.",
        "type": "Number",
        "default": "0"
    },
    "table.data": {
        "description": "Array aus Objekten.",
        "type": "Array",
        "default": "undefined"
    },
    "table.keysToRead": {
        "description": "Array aus Strings - welche Keys sollen aus dem Object ausgelesen werden.",
        "type": "Array",
        "default": "undefined"
    },
    "table.titleOnMinified": {
        "description": "Render der Tabellen Überschriften, wenn das Modul minifiziert wird (ausgelöst vom resize event).",
        "type": "Boolean",
        "default": "True"
    },
    "bread.hashRouter": {
        "description": "Befindet sich die aktuelle React-App in einem ReactRouter oder nicht? Wenn true, wird der Hostname (erste Breadcrumbs) zum Suffix '/ # /'.",
        "type": "Boolean",
        "default": "False"
    },
    "bread.domainName": {
        "description": "Ersetzen Sie den Hostnamen (erster Breadcrumb) durch einen benutzerdefinierten Text",
        "type": "String",
        "default": "undefined"
    },
    "bread.delimiter": {
        "description": "Trennzeichen zwischen den Breadrumbs.",
        "type": "String | JSX",
        "default": ">"
    },
    "bread.overwriteText": {
        "description": "Muss mit dem Schlüssel verwendet werden: 'moduleMenu'. Wenn true, wird anstelle des Breadcrumbs-Pfads der erste untergeordnete Menüschlüssel: 'text' angezeigt. Wenn False, werden die ersten untergeordneten Menüschlüssel: 'text' angezeigt ignoriert. ",
        "type": "Boolean",
        "default": "False"
    },
    "bread.moduleMenu": {
        "description": "Das Modul wurde angehängt: 'MenuClickHorizontal' nur für den letzten Breadcrumb verfügbar. Nur ein einziges Kind als übergeordnetes Element zulässig - untergeordnete Verschachtelung ohne Einschränkungen zulässig.",
        "type": "<MenuClickHorizontal>",
        "default": "undefined"
    },
    "closeOnClickOutside" : {
        "description": "Wenn true und der Benutzer nicht innerhalb des Elements ein Klick Event durchführt, werden alle aufgeklappten Elemente wieder zugemacht.",
        "type": "Boolean",
        "default": "False"
    },
    /**
     * Descriptions
     */
    "accordion.description": "Das Akkordeon-Modul kennt keine Einschränkungen bei der Verschachtelung von Kindern.",
    "accordion.description2": "Beispiel mit einem Klick-Handler (außerhalb des Moduls), der durch den Schlüssel bereitgestellt wird: 'closeOnClickOutside' wurde auf true gesetzt (alle Kinder rekursiv geschlossen).",
    "cards.scroll.description": "Das Kartenmodul lädt mehr Elemente, wenn der untere Rand des übergeordneten Div erreicht ist.",
    "cards.scrollCallback.description": "Das Kartenmodul lädt mehr Elemente, wenn der untere Rand des übergeordneten Div erreicht ist. Das Laden weiterer Karten basiert auf der benutzerdefinierten Rückruffunktion. Wenn der Wert 'break' ist, wird der Scroll-Listener entfernt.",
    "icons.description": "Symbolmodul mit allen Symbolen, KEINEN Übersetzungen und ausgewählten Standardsymbolen: Smileys. Suchen Sie nach dem Klickereignis in der Konsole nach einem Symbol.",
    "icons.description2": "Symbolmodul mit ausgewählten Symbolen: Smileys, Aktivität, Reisen, Völker, Objekte, noch KEINE Übersetzungen und standardmäßig ausgewählte Symbole: Aktivität. Suchen Sie nach dem Klickereignis in der Konsole nach einem Symbol.",
    "icons.description3": "Symbolmodul mit ausgewählten Symbolen: Smileys, Aktivität, Reisen, Völker, Objekte und 2 übersetzte Symboltitel. Suchen Sie nach dem Klickereignis in der Konsole nach einem Symbol.",
    /**
     * 
     */
    globalStyle: {
        "description": "Laden der globalen Style Datei (react-revolution.css) erlauben. Falls diese schon geladen wurde, wird diese das 2 Mal nicht geladen.",
        "type": "Boolean",
        "default": "False"
    },

    moduleStyle: {
        "description": "Allow loading of the style file of the single module. If it has already been loaded, it will not be loaded twice.",
        "type": "Boolean",
        "default": "False"
    },
    styleLoading: "Style die im Modul Verwendung finden",
    "runtime.generator.description": 'Wenn bei Verwendung der Rückruffunktion ein Fehler aufgetreten ist (runtime generator are not defined) in diesem Modul (callback), installieren Sie bitte: npm install --save @ babel / runtime && npm install --save-dev @ babel / plugin -transform-runtime; Fügen Sie dann in der .babelrc Datei die folgende Zeile hinzu: {"presets": ["@ babel / preset-env", "@ babel / preset-react"], "plugins": [["@ babel / transform-runtime"] ]}. ',

    "pagination.data": {
        "description": "Array von benutzerdefinierten Objekten.",
        "type": "Array",
        "default": "[]"
    },
    "pagination.searchOnKeys": {
        "description": "Array von Zeichenfolgen. Array von (bereitgestellten Objekten innerhalb des 'Daten'-Schlüssels) Schlüsselnamen zur Verwendung des Suchfelds (Eingabefelds).",
        "type": "Array",
        "default": "[]"
    },
    "pagination.itemsPerSite": {
        "description": "Wie viele Websites auf jeder Seite gerendert werden sollen.",
        "type" : "Number",
        "default": "10"
    },
    "pagination.keysToRender": {
        "description": "Array von Zeichenfolgen. Array von Schlüsselnamen, die basierend auf dem Array von Objekten angezeigt werden sollen (Schlüssel: 'Daten').",
        "type": "Array",
        "default": "[]"
    },
    "pagination.liCallback": {
        "description": "Benutzerdefinierte Rückruffunktion, wenn der Benutzer auf eine einzelne Zeile klickt. Diese Funktion gibt 2 Argumente zurück. Argument 1: clickEvent, Argument 2: aktuelles geklicktes Element als Objekt.",
        "type": "Funktion",
        "default": "undefined"
    },
    "pagination.inputCallback": {
        "description": "Benutzerdefinierte Rückruffunktion, wenn der Benutzer den Wert des Eingabefelds ändert. Diese Funktion gibt 1 Argumente zurück. Argument 1: Ereignis.",
        "type": "Funktion",
        "default": "undefined"
    },
    "pagination.lineNumber": {
        "description": "Zeigt die aktuelle Zeilennummer an (Schleifenindex +1).",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.resetLineNumber": {
        "description": "Setzen Sie die Nummer jeder Zeile für jede Seite zurück. Jedes Element beginnt mit der Anzahl: 1.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.displayTotal": {
        "description": "Zeigt die Gesamtzahl der bereitgestellten Daten an. Länge.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.totalPrefix": {
        "description": "Zeigt ein Präfix an, bevor die Anzahl der Gesamtdaten angezeigt wird.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.totalSufix": {
        "description": "Zeigt ein Suffix an, nach der Anzahl der Gesamtdaten",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.paginationPages": {
        "description": "Paginierung anzeigen.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.paginationTextPrefix": {
        "description": "Text von 'Page'.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "pagination.paginationTextMiddle": {
        "description": "Text von 'of'.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "pagination.prevPages": {
        "description": "Wie viele Seiten sollten 'vor' der aktuellen Seite (als vorherige Seiten) angezeigt werden?",
        "type" : "Number",
        "default": "2"
    },
    "pagination.nextPages": {
        "description": "Wie viele Seiten sollten 'nach' der aktuellen Seite (als nächste Seiten) angezeigt werden?",
        "type" : "Number",
        "default": "2"
    },
    "pagination.totalPages": {
        "description": "Gesamtanzahl der verfügbaren Seiten.",
        "type" : "Number",
        "default": "0"
    },
    "pagination.globalCount": {
        "description": "Gesamtanzahl der verfügbaren Elemente.",
        "type" : "Number",
        "default": "0"
    },
    "pagination.alignPagesItems": {
        "description": "Struktur der gerenderten Elemente. Verfügbare Optionen: 1, 2, 3, 4, 5.",
        "type" : "Number",
        "default": "1"
    },
    "pagination.alignPagination": {
        "description": "Gerenderte Paginierungsstruktur. Verfügbare Optionen: 1, 2.",
        "type" : "Number",
        "default": "1"
    },
    "pagination.previousButton": {
        "description": "HTML für die vorherige Schaltfläche.",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "pagination.nextButton": {
        "description": "HTML für die nächste Schaltfläche.",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "pagination.searchActive": {
        "description": "Rendern Sie das Sucheingabefeld.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.searchPlaceholder": {
        "description": "Platzhalter eingeben.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "pagination.searchPlaceholder": {
        "description": "Platzhalter.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "pagination.searchIcon": {
        "description": "Der HTML-Code der Suchschaltfläche auf der rechten Seite des Sucheingabefelds. Wenn der Benutzer auf das Suchsymbol klickt, wird eine Suche ausgeführt.",
        "type": "String | JSX",
        "default": "🔍"
    },
    "pagination.searchSensitive": {
        "description": "Führen Sie eine Suche als 'key sensitive search' aus.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.searchValue": {
        "description": "Zum ersten Mal einen benutzerdefinierten Suchwert neu erstellen, um eine Suche ohne Benutzerinteraktion auszuführen.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "pagination.searchOnKeyDown": {
        "description": "Führen Sie eine Suche nach den bereitgestellten Daten durch, wenn der Benutzer den Eingabewert ändert.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.searchTitle": {
        "description": "Tag <h1> als Titel für das Suchfeld.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "pagination.paginationTitle": {
        "description": "Tag <h1> als Titel für die Tabelle.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "pagination.paginationTitle": {
        "description": "Tag <h1> als Titel für die Tabelle.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "pagination.fallbackLoading": {
        "description": "Verwenden Sie ein Ladesymbol, während der Benutzer Daten filtert.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.fallbackLoadingTime": {
        "description": "Verwenden Sie ein benutzerdefiniertes Zeitlimit, um das Ladesymbol für längere ms (Millisekunden) anzuzeigen.",
        "type" : "Number",
        "default": "0"
    },
    "pagination.fallbackNoData": {
        "description": "Benutzerdefinierte Daten zum Rendern, wenn keine Daten angegeben werden.",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "pagination.fallbackNoDataSearch": {
        "description": "Benutzerdefinierte Daten zum Rendern, wenn während der Suche keine Daten gefunden wurden.",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "pagination.fallbackMounting": {
        "description": "Verwenden Sie ein Ladesymbol, während das Modul (die Komponente) Daten generiert.",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "removeHashFromDomain": {
        "description": "Entfernung der Zeichenkette '/#/' von dem Text der Domände.",
        "type": "Boolean",
        "default": "False"
    },
    "globalMessage.empty": {
        "description": "Wenn true, dann werden alle Nachrichten, bei einer Anderung der Lokation (window.location.href), entfernt.",
        "type": "Boolean",
        "default": "True"
    },
    "breadcrumbs.example3": "Beispiel mit dem letzten Eintrag als Menu Element",
    "pager.dynamic.description" : 'Dies ist ein Beispiel mit einem dynamischen Pager also bei jedem Seiten Wechsel, wird eine Datenbank Abfrage durchgeführt. Diese Funktion mit der DB Abfrage liefert ein Promise zurück. Es muss ein Promise sein, da das Modul intern ein "await" beinhaltet, somit wird der Seiten Wechsel nur dann stattfinden, wenn der Promise auch resolved wird und Daten geliefert werden.',

    "promise": {
        "description": "Generieren Sie jede Codezeile als Promise für eine bessere Leistung, während Sie sehr lange Zeichenfolgen für die Quellcodestruktur generieren. Wenn false, generiert das Modul den Quellcode (jsx-Code) ohne Promise.",
        "type": "Boolean",
        "default": "False"
    },
    "promiseLine": {
        "description": "Funktioniert nur, wenn der Schlüssel \"Versprechen\" auf \"Wahr\" gesetzt ist. Machen Sie in der Zeilennummer x eine \"Pause\" (Zeitüberschreitung zum Auflösen des aktuellen Versprechens), um die kritische CPU-Auslastung zu stoppen, wenn die übergebene Zeichenfolge / der Code länger ist dann 10.000 Codezeilen. ",
        "type": "Number",
        "default": "1000"
    },
    "promiseTime": {
        "description": "Funktioniert nur, wenn der Schlüssel \"Versprechen\" auf \"Wahr\" gesetzt ist. Zeitpunkt des Timeouts zum Auflösen der aktuellen Zeilen Versprechen in Kombination mit dem Schlüssel \"VersprechenLine\".",
        "type": "Number",
        "default": "500"
    },
    "matcher": {
        "description": "Array von Objekten.",
        "type": "Array",
        "default": "[]"
    },
    "matcher.words": {
        "description": "Array von übereinstimmenden Zeichenfolgen / Wörtern.",
        "type": "Array",
        "default": "[]"
    },
    "matcher.className": {
        "description": "Fügen Sie dem übereinstimmenden Wort einen Klassennamen hinzu.",
        "type": "String",
        "default": "undefined"
    },
    "lineNumberNewLine": {
        "description": "Funktioniert nur, wenn der Schlüssel 'lineNumber' auf true gesetzt ist. Rendern Sie die Zeilennummer für leere Zeilen.",
        "type": "String",
        "default": "undefined"
    },
    "sourceCode": {
        "description": "Array von Zeichenfolgen. Welche logischen Funktionen sollten für jede Zeile in der angegebenen Reihenfolge aufgerufen werden, um bestimmten Codes zu entsprechen. Die Schritte für jede Codezeile sind: 1 - Tags: JSX (HTML) -Tags. 2 - Eigenschaften: HTML-Eigenschaften wie className. 3 - Variablen: Wörter, die das gleiche (=) Zeichen enthalten. 4 - objectProperty: einzelne Eigenschaft eines Objekts, wenn das Doppelpunktzeichen angegeben ist. 5 - Funktionen: Übereinstimmung mit einzelnen Funktionen. 6 - Wörter: Übereinstimmung Benutzerdefinierte Wörter. 7 - Anführungszeichen: Übereinstimmende Anführungszeichen ('' ',', '\"'). 8 - Klammern: Übereinstimmende Klammern ('(', '}', ']'). ",
        "type": "Array",
        "default": "['tags', 'properties', 'variables', 'objectProperty', 'functions', 'words', 'quote', 'brackets']"
    },
    "code": {
        "description": "Hauptzeichenfolge zum Generieren des Quellcodes.",
        "type": "String",
        "default": "<leere Zeichenfolge>"
    },
    "link.404": {
        "description": "Objekt für die Backlink-Funktionalität.",
        "type": "Objekt",
        "default": "{}"
    },
    "link.404.text": {
        "description": "Links text.",
        "Typ": "JSX | String",
        "default": "undefined"
    },
    "link.404.href": {
        "description": "Links destination.",
        "type": "String",
        "default": "undefined"
    },
    "link.404.props": {
        "description": "Die HTML-Eigenschaften des <a> -Tags.",
        "type": "Objekt",
        "default": "undefined"
    },
    "link.404.callback": {
        "description": "Rückruffunktion beim Klickereignis. Diese Funktion gibt 1 Argument zurück. Argument 1: Klickereignis.",
        "type": "Objekt",
        "default": "undefined"
    },
    "text404": {
        "description": "Fehlercode.",
        "type": "String",
        "default": "404"
    },
    "404.text1": {
        "description": "Benutzerdefinierter (größerer) Text.",
        "type": "String",
        "default": "requested page"
    },
    "404.text2": {
        "description": "Benutzerdefinierter (kleinerer) Text.",
        "type": "String",
        "default": "was not found"
    },
    "404.bad": {
        "description": "Befindet sich das Modul im fehlerhaften Modus?",
        "type": "Boolean",
        "default": "False"
    },
    "404.shipname": {
        "description": "Name des Schiffs.",
        "type": "JSX | String",
        "default": "<leere Zeichenfolge>"
    },
    "scroll-to-desc-1": "Beispiel mit einer Navigierung zum Start der Seite innerhalb von 1 Sekunde.",
    "scroll-to-desc-2": "Beispiel mit einer Navigierung zum ersten Beispiel innerhalb von 300 Millisekunden.",
    "navigationTime": {
        "description": "Benutzerdefinierte Zeit der Navigation in Millisekunden.",
        "type": "Number",
        "default": "300"
    },
    "navigationTarget": {
        "description": "Navigieren Sie auf der Seite zu diesem HTML-Element (Selektor). Geben Sie für eine Klasse die erste Position ein. (Punkt) Wenn es sich um eine ID handelt, muss an der ersten Position ein # (Hash) stehen. Wenn der Schlüssel 'html' leer / undefiniert ist und der Wert 'bottom' lautet, gibt das Modul einen vordefinierten HTML-Bildlauf nach unten und eine Bildlauffunktion nach unten zurück. Wenn der Wert 'top' lautet, führt das Modul einen Bildlauf nach oben durch vordefiniertes HTML und scrollen Sie zur obersten Funktionalität.",
        "type": "JSX | String",
        "default": "<leere Zeichenfolge>"
    },
    "html": {
        "description": "Benutzerdefiniertes HTML das angezeigt wird, falls der Key 'navigationTarget' keinen . (Punkt) oder # (Hash) an der ersten Stelle stehen hat.",
        "type": "JSX | String",
        "default": "<leere Zeichenfolge>"
    },
    "persistUserSelection": {
        "description": "Speichern Sie die aktuelle Einstellung der umgeschalteten Seitenleiste. Wenn der Benutzer die Seite aktualisiert, wird der vorherige Status der Seitenleiste verwendet.",
        "type": "Boolean",
        "default": "undefined"
    },
    "clearPersistUserSelection": {
        "description": "Löschen Sie den vorherigen Status der gespeicherten Seitenleisten.",
        "type": "Boolean",
        "default": "undefined"
    },
    "sidebarMinifiedAt": {
        "description": "Wenn die Taste 'autopilot' true ist, minimieren Sie die Seitenleiste auf die minimale Breite. Wenn false, wird die Seitenleiste ausgeblendet. Die Seitenleiste wird mit der Taste 'toggleMenuHtml' umgeschaltet.",
        "type": "Number",
        "default": "720"
    },
    "sidebarMaxifiedAt": {
        "description": "Maximieren Sie die zuvor minimierte Seitenleiste auf die Hauptbreite (Basisbreite).",
        "type": "Number",
        "default": "1024"
    },
    "displayMinifyMaxifyIcon": {
        "description": "Rendern Sie die Seitenleisten, um HTML umzuschalten - die JSX aus dem Schlüssel 'toggleMenuHtml'.",
        "type": "Boolean",
        "default": "undefined"
    },
    "minify": {
        "description": "Ist die Seitenleiste (vollständig) minimiert?",
        "type": "Boolean",
        "default": "undefined"
    },
    "autopilot": {
        "description": "Wenn true, ändert der Listener für Größenänderungsereignisse die Seitenleiste in 3 Schritten. Wenn false, ändert der Listener für Größenänderungsereignisse die Seitenleiste in 2 Schritten.",
        "type": "Boolean",
        "default": "False"
    },
    "toggleMenuHtml": {
        "description": "Benutzerdefiniertes JSX, das als Umschalt-Symbol für die Seitenleiste verwendet wird. Dieser HTML-Code befindet sich im Inhalt der Kopfzeilen.",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "closeMenuHtml": {
        "description": "Benutzerdefiniertes JSX wird als Schließsymbol in der Seitenleiste verwendet, wenn die Dokumentbreite geringer ist als der Wert, der mit dem Schlüssel 'sidebarMinifiedAt' an das Modul übergeben wurde.",
        "type": "String | JSX",
        "default": "<leere Zeichenfolge>"
    },
    "moduleSidebar": {
        "description": "Das Modul 'MenuClickHorizontal'.",
        "type": "Modul",
        "default": "undefined"
    },
    "headerData": {
        "description": "Benutzerdefiniertes JSX im Header-Bereich.",
        "type": "Modul",
        "default": "<leere Zeichenfolge>"
    },
    "headerProps": {
        "description": "Eigenschaften von Header div.",
        "type": "Objekt",
        "default": "{}"
    },
    "contentData": {
        "description": "Benutzerdefiniertes JSX im Inhaltsbereich.",
        "type": "Modul",
        "default": "<leere Zeichenfolge>"
    },
    "contentProps": {
        "description": "Eigenschaften von Content div.",
        "type": "Objekt",
        "default": "{}"
    },
    "footerData": {
        "description": "Benutzerdefiniertes JSX im Fußzeilenbereich.",
        "type": "Modul",
        "default": "<leere Zeichenfolge>"
    },
    "footerProps": {
        "description": "Footer div`s Eigenschaften.",
        "type": "Objekt",
        "default": "{}"
    },
    "dashed" : {
        "description": "Generiere auf der linken Seite des aufgeklappten Menü Elementes ein ge-dashen Rand.",
        "type": "Boolean",
        "default": "False"
    },
    "dashed_example": "Ein Beispiel mit dem übergebenen Key 'dashed={true}'.",
    "articles.animation": {
        "description": "Eine Animation beim Umschalten des Artikels. Animationen, die verwendet werden können: 'height', 'scale', 'opacity'.",
        "type": "String",
        "default": "undefined"
    },
    "articles.animation.images": {
        "description": "Eine Animation beim Umschalten des Artikels. Animationen, die verwendet werden können: 'scale'.",
        "type": "String",
        "default": "undefined"
    },
    "articles.title": {
        "description": "Titel des Artikels.",
        "type": "String",
        "default": "undefined"
    },
    "articles.titleProps": {
        "description": "Die HTML-Tag-Attribute der Titel.",
        "type": "Objekt",
        "default": "{}"
    },
    "articles.text": {
        "description": "Text des Artikels.",
        "type": "String",
        "default": "undefined"
    },
    "articles.textProps": {
        "description": "Die Text-HTML-Tags-Attribute.",
        "type": "Objekt",
        "default": "{}"
    },
    "articles.image": {
        "description": "URL des Bildes.",
        "type": "String",
        "default": "undefined"
    },
    "articles.imageProps": {
        "description": "Die HTML-Tags-Attribute der Bilder.",
        "type": "Objekt",
        "default": "{}"
    },
    "articles.imageData": {
        "description": "Benutzerdefinierte Daten im Bild.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "articles.dataToggle": {
        "description": "Wichtige benutzerdefinierte Daten, die nach dem Klicken auf den Artikel umgeschaltet werden.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "articles.border": {
        "description": "Object.",
        "type": "Objekt",
        "default": "{}"
    },
    "articles.border.site": {
        "description": "Richten Sie den Rand auf der Site aus: 'oben', 'rechts', 'unten', 'links'.",
        "type": "String",
        "default": "undefined"
    },
    "articles.border.width": {
        "description": "Die Rahmenbreite in px.",
        "type": "Number",
        "default": "undefined"
    },
    "articles.border.color": {
        "description": "Die Farbe des Rahmens. Werte, die als Farbe verwendet werden können: Zeichenfolge, rgb / rgba und HEX.",
        "type": "String",
        "default": "undefined"
    },
    "articles.toggleOn": {
        "description": "Umschaltung passiert nach dem Klick auf das Element. Verfügbare Optionen: 'title', 'text'. Standard mäßig wird nur ein Klick auf die ganze 'box' (Artikel Box) akzeptiert und bewirkt ein toggle Effeckt.",
        "type": "String",
        "default": "undefined"
    },
    "articles.itemsPerLine": {
        "description": "Anzahl der Elemente die in einer 'Zeile' generiert werden sollen.",
        "type": "Number",
        "default": "3"
    },
    "articles.persist": {
        "description": "Die angezeigten Daten (die aufgeklappt wurden) sollen bestehend bleiben.",
        "type": "Boolean",
        "default": "False"
    },
    "articles.description.1": "Beispiel mit der Verwendung des Schlüssels 'border'.",
    "articles.description.2": "Beispiel mit der Schlüsselverwendung closeOnClickOutside={true}. Dies bedeutet, dass alle umgeschalteten Artikel geschlossen werden, wenn der Benutzer außerhalb des Moduls klickt.",
    "articles.description.3": "Beispiel mit der Schlüsselverwendung persist={true}."
};

export default DE;
