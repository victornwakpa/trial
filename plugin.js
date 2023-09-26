var privileges = [
    'tableValue',
    'configuration',
]

var templateTable = document.createElement('template')
templateTable.innerHTML = `
<style>
.container{
  width: 100%
}

@media (min-width: 640px){
  .container{
    max-width: 640px
  }
}

@media (min-width: 768px){
  .container{
    max-width: 768px
  }
}

@media (min-width: 1024px){
  .container{
    max-width: 1024px
  }
}

@media (min-width: 1280px){
  .container{
    max-width: 1280px
  }
}

@media (min-width: 1536px){
  .container{
    max-width: 1536px
  }
}

.absolute{
  position: absolute
}

.m-0{
  margin: 0px
}

.mx-auto{
  margin-left: auto;
  margin-right: auto
}

.my-10{
  margin-top: 2.5rem;
  margin-bottom: 2.5rem
}

.my-20{
  margin-top: 5rem;
  margin-bottom: 5rem
}

.mt-10{
  margin-top: 2.5rem
}

.mt-4{
  margin-top: 1rem
}

.box-border{
  box-sizing: border-box
}

.block{
  display: block
}

.flex{
  display: flex
}

.grid{
  display: grid
}

.h-24{
  height: 6rem
}

.h-48{
  height: 12rem
}

.h-\[60\%\]{
  height: 60%
}

.h-2\/3{
  height: 66.666667%
}

.w-24{
  width: 6rem
}

.w-60{
  width: 15rem
}

.w-full{
  width: 100%
}

.grid-cols-4{
  grid-template-columns: repeat(4, minmax(0, 1fr))
}

.flex-col{
  flex-direction: column
}

.place-content-center{
  place-content: center
}

.gap-8{
  gap: 2rem
}

.space-y-4 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse))
}

.overflow-hidden{
  overflow: hidden
}

.rounded-full{
  border-radius: 9999px
}

.rounded-xl{
  border-radius: 0.75rem
}

.rounded-lg{
  border-radius: 0.5rem
}

.border{
  border-width: 1px
}

.border-2{
  border-width: 2px
}

.bg-slate-100{
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity))
}

.bg-white{
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity))
}

.object-cover{
  -o-object-fit: cover;
     object-fit: cover
}

.p-8{
  padding: 2rem
}

.p-4{
  padding: 1rem
}

.p-0{
  padding: 0px
}

.pt-6{
  padding-top: 1.5rem
}

.text-center{
  text-align: center
}

.text-6xl{
  font-size: 3.75rem;
  line-height: 1
}

.text-lg{
  font-size: 1.125rem;
  line-height: 1.75rem
}

.text-base{
  font-size: 1rem;
  line-height: 1.5rem
}

.text-sm{
  font-size: 0.875rem;
  line-height: 1.25rem
}

.text-xl{
  font-size: 1.25rem;
  line-height: 1.75rem
}

.font-bold{
  font-weight: 700
}

.font-medium{
  font-weight: 500
}

.uppercase{
  text-transform: uppercase
}

.text-sky-500{
  --tw-text-opacity: 1;
  color: rgb(14 165 233 / var(--tw-text-opacity))
}

.text-slate-700{
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity))
}

.text-gray-600{
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity))
}

.text-gray-800{
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity))
}

.shadow-md{
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.filter{
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}

@media (prefers-color-scheme: dark){
  .dark\:bg-slate-800{
    --tw-bg-opacity: 1;
    background-color: rgb(30 41 59 / var(--tw-bg-opacity))
  }

  .dark\:text-sky-400{
    --tw-text-opacity: 1;
    color: rgb(56 189 248 / var(--tw-text-opacity))
  }

  .dark\:text-slate-500{
    --tw-text-opacity: 1;
    color: rgb(100 116 139 / var(--tw-text-opacity))
  }
}

@media (min-width: 640px){
  .sm\:grid-cols-2{
    grid-template-columns: repeat(2, minmax(0, 1fr))
  }
}

@media (min-width: 768px){
  .md\:flex{
    display: flex
  }

  .md\:h-auto{
    height: auto
  }

  .md\:w-48{
    width: 12rem
  }

  .md\:grid-cols-4{
    grid-template-columns: repeat(4, minmax(0, 1fr))
  }

  .md\:rounded-none{
    border-radius: 0px
  }

  .md\:p-0{
    padding: 0px
  }

  .md\:p-8{
    padding: 2rem
  }

  .md\:text-left{
    text-align: left
  }
}

@media (min-width: 1280px){
  .xl\:max-w-7xl{
    max-width: 80rem
  }
}
</style>

<div id="container" class="grid place-content-center">
    
</div>
`

class OuterbasePluginConfig_$PLUGIN_ID {
    imageKey = undefined
    titleKey = undefined
    descriptionKey = undefined
    subtitleKey = undefined

    constructor(object) {
        this.imageKey = object?.imageKey
        this.titleKey = object?.titleKey
        this.descriptionKey = object?.descriptionKey
        this.subtitleKey = object?.subtitleKey
    }

    toJSON() {
        return {
            "imageKey": this.imageKey,
            "titleKey": this.titleKey,
            "descriptionKey": this.descriptionKey,
            "subtitleKey": this.subtitleKey
        }
    }
}

class OuterbasePluginTable_$PLUGIN_ID extends HTMLElement {
    static get observedAttributes() {
        return privileges
    }

    config = new OuterbasePluginConfig_$PLUGIN_ID({})
    items = []

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(templateTable.content.cloneNode(true))
    }

    connectedCallback() {
        const encodedTableJSON = this.getAttribute('configuration');
        const decodedTableJSON = encodedTableJSON
            ?.replace(/&quot;/g, '"')
            ?.replace(/&#39;/g, "'");
        const configuration = JSON.parse(decodedTableJSON);

        if (configuration) {
            this.config = new OuterbasePluginConfig_$PLUGIN_ID(
                configuration
            )
        }

        // Set the items property to the value of the `tableValue` attribute.
        if (this.getAttribute('tableValue')) {
            const encodedTableJSON = this.getAttribute('tableValue');
            const decodedTableJSON = encodedTableJSON
                ?.replace(/&quot;/g, '"')
                ?.replace(/&#39;/g, "'");
            this.items = JSON.parse(decodedTableJSON);
        }

        // Manually render dynamic content
        this.render()
    }

    render() {
        this.shadow.querySelector('#container').innerHTML = `
        <div class="grid-container grid gap-8 my-20 grid-cols-4 xl:max-w-7xl">
            ${this.items.map((item) => `
                <div class="grid-item flex flex-col rounded-lg overflow-hidden w-60 shadow-md border bg-white">
                    ${ this.config.imageKey ? `<div class="ih-2/3 box-border"><img src="${item[this.config.imageKey]}" class="object-cover h-48 w-full"></div>` : `` }

                    <div class="flex flex-col p-4"">
                        ${ this.config.titleKey ? `<p class="title font-medium text-xl">${item[this.config.titleKey]}</p>` : `` }
                        ${ this.config.descriptionKey ? `<p class="description">${item[this.config.descriptionKey]}</p>` : `` }
                        ${ this.config.subtitleKey ? `<p class="subtitle text-base text-gray-800">${item[this.config.subtitleKey]}</p>` : `` }
                    </div>
                </div>
            `).join("")}
        </div>
        `
    }
}

var templateConfiguration = document.createElement('template')
templateConfiguration.innerHTML = `
<style>
    #container {
        display: flex;
        height: 100%;
        overflow-y: scroll;
        padding: 40px 50px 65px 40px;
    }

    .field-title {
        font: "Inter", sans-serif;
        font-size: 12px;
        line-height: 18px;
        font-weight: 500;
        margin: 0 0 8px 0;
    }

    select {
        width: 320px;
        height: 40px;
        margin-bottom: 16px;
        background: transparent;
        border: 1px solid #343438;
        border-radius: 8px;
        color: black;
        font-size: 14px;
        padding: 0 8px;
        cursor: pointer;
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="32"><path fill="black" d="M480-380 276-584l16-16 188 188 188-188 16 16-204 204Z"/></svg>');
        background-position: 100%;
        background-repeat: no-repeat;
        appearance: none;
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
    }

    button {
        border: none;
        background-color: #834FF8;
        color: white;
        padding: 6px 18px;
        font: "Inter", sans-serif;
        font-size: 14px;
        line-height: 18px;
        border-radius: 8px;
        cursor: pointer;
    }

    .preview-card {
        margin-left: 80px;
        width: 240px;
        background-color: white;
        border-radius: 16px;
        overflow: hidden;
    }

    .preview-card > img {
        width: 100%;
        height: 165px;
    }

    .preview-card > div {
        padding: 16px;
        display: flex; 
        flex-direction: column;
        color: black;
    }

    .preview-card > div > p {
        margin: 0;
    }

    @media (prefers-color-scheme: dark) {
        select {
            color: white;
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="32"><path fill="white" d="M480-380 276-584l16-16 188 188 188-188 16 16-204 204Z"/></svg>');
        }
    }
</style>

<div id="container">
    
</div>
`

class OuterbasePluginTableConfiguration_$PLUGIN_ID extends HTMLElement {
    static get observedAttributes() {
        return privileges
    }

    config = new OuterbasePluginConfig_$PLUGIN_ID({})
    items = []

    constructor() {
        super()

        // The shadow DOM is a separate DOM tree that is attached to the element.
        // This allows us to encapsulate our styles and markup. It also prevents
        // styles from the parent page from leaking into our plugin.
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(templateConfiguration.content.cloneNode(true))
    }

    connectedCallback() {
        // Parse the configuration object from the `configuration` attribute
        // and store it in the `config` property.
        const encodedTableJSON = this.getAttribute('configuration');
        const decodedTableJSON = encodedTableJSON
            ?.replace(/&quot;/g, '"')
            ?.replace(/&#39;/g, "'");
        const configuration = JSON.parse(decodedTableJSON);

        this.config = new OuterbasePluginConfig_$PLUGIN_ID(
            configuration
        )

        // Set the items property to the value of the `tableValue` attribute.
        if (this.getAttribute('tableValue')) {
            const encodedTableJSON = this.getAttribute('tableValue');
            const decodedTableJSON = encodedTableJSON
                ?.replace(/&quot;/g, '"')
                ?.replace(/&#39;/g, "'");
            this.items = JSON.parse(decodedTableJSON);
        }

        // Manually render dynamic content
        this.render()
    }

    render() {
        let sample = this.items.length ? this.items[0] : {}
        let keys = Object.keys(sample)

        this.shadow.querySelector('#container').innerHTML = `
        <div style="flex: 1;">
            <p class="field-title">Image Key</p>
            <select id="imageKeySelect">
                ` + keys.map((key) => `<option value="${key}" ${key === this.config.imageKey ? 'selected' : ''}>${key}</option>`).join("") + `
            </select>

            <p class="field-title">Title Key</p>
            <select id="titleKeySelect">
                ` + keys.map((key) => `<option value="${key}" ${key === this.config.titleKey ? 'selected' : ''}>${key}</option>`).join("") + `
            </select>

            <p class="field-title">Description Key</p>
            <select id="descriptionKeySelect">
                ` + keys.map((key) => `<option value="${key}" ${key === this.config.descriptionKey ? 'selected' : ''}>${key}</option>`).join("") + `
            </select>

            <p class="field-title">Subtitle Key</p>
            <select id="subtitleKeySelect">
                ` + keys.map((key) => `<option value="${key}" ${key === this.config.subtitleKey ? 'selected' : ''}>${key}</option>`).join("") + `
            </select>

            <div style="margin-top: 8px;">
                <button id="saveButton">Save View</button>
            </div>
        </div>

        <div>
            <div class="preview-card">
                <img src="${sample[this.config.imageKey]}" width="100" height="100">

                <div>
                    <p style="margin-bottom: 8px; font-weight: bold; font-size: 16px; line-height: 24px; font-family: 'Inter', sans-serif;">${sample[this.config.titleKey]}</p>
                    <p style="margin-bottom: 8px; font-size: 14px; line-height: 21px; font-weight: 400; font-family: 'Inter', sans-serif;">${sample[this.config.descriptionKey]}</p>
                    <p style="margin-top: 12px; font-size: 12px; line-height: 16px; font-family: 'Inter', sans-serif; color: gray; font-weight: 300;">${sample[this.config.subtitleKey]}</p>
                </div>
            </div>
        </div>
        `

        var saveButton = this.shadow.getElementById("saveButton");
        saveButton.addEventListener("click", () => {
            this.callCustomEvent({
                action: 'onsave',
                value: this.config.toJSON()
            })
        });

        var imageKeySelect = this.shadow.getElementById("imageKeySelect");
        imageKeySelect.addEventListener("change", () => {
            this.config.imageKey = imageKeySelect.value
            this.render()
        });

        var titleKeySelect = this.shadow.getElementById("titleKeySelect");
        titleKeySelect.addEventListener("change", () => {
            this.config.titleKey = titleKeySelect.value
            this.render()
        });

        var descriptionKeySelect = this.shadow.getElementById("descriptionKeySelect");
        descriptionKeySelect.addEventListener("change", () => {
            this.config.descriptionKey = descriptionKeySelect.value
            this.render()
        });

        var subtitleKeySelect = this.shadow.getElementById("subtitleKeySelect");
        subtitleKeySelect.addEventListener("change", () => {
            this.config.subtitleKey = subtitleKeySelect.value
            this.render()
        });
    }

    callCustomEvent(data) {
        const event = new CustomEvent('custom-change', {
            detail: data,
            bubbles: true,  // If you want the event to bubble up through the DOM
            composed: true  // Allows the event to pass through shadow DOM boundaries
        });

        this.dispatchEvent(event);
    }
}

window.customElements.define('outerbase-plugin-table-$PLUGIN_ID', OuterbasePluginTable_$PLUGIN_ID)
window.customElements.define('outerbase-plugin-table-configuration-$PLUGIN_ID', OuterbasePluginTableConfiguration_$PLUGIN_ID)