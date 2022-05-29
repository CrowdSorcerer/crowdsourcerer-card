/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, TemplateResult, css, PropertyValues, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  LovelaceCardEditor,
  getLovelace,
} from 'custom-card-helpers';

import type { BoilerplateCardConfig } from './types';
import { CARD_VERSION } from './const';
import { localize } from './localize/localize';
import { HassEntity } from "home-assistant-js-websocket";


/* eslint no-console: 0 */
console.info(
  `%c  CROWDSOURCERER-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'crowdsourcerer-card',
  name: 'Crowdsourcerer Card',
  description: 'Custom card for Crowdsourcerer integration that enables data management',
});

@customElement('crowdsourcerer-card')
export class CrowdsourcererCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import('./editor');
    return document.createElement('boilerplate-card-editor');
  }

  public static getStubConfig(): Record<string, unknown> {
    return {};
  }

  @property({ attribute: false }) public hass!: HomeAssistant;

  @property() public stateObj!: HassEntity | null;

  @property({ type: String }) public route = "main";

  @state() private config!: BoilerplateCardConfig;


  public setConfig(config: BoilerplateCardConfig): void {
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this.config = {
      name: 'Crowdsourcerer Data Collector',
      entity: 'sensor.crowdsourcerer',
      ...config,
    };
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  protected render(): TemplateResult | void {

    this.stateObj = this.config.entity && this.config.entity in this.hass.states ? this.hass.states[this.config.entity] : null;

    if (this.stateObj == null) {
      return html`
        <ha-card
        .header=${this.config.name}
        >
          <div class="view-content">
            <p>Entity not found!</p>
          </div>
        </ha-card>
      `
    }
    

    if (this.config.show_warning) {
      return this._showWarning(localize('common.show_warning'));
    }

    if (this.config.show_error) {
      return this._showError(localize('common.show_error'));
    }

    return html`
      <ha-card
        .header=${this.config.name}
      >
        <div class="card-content">
          <div>${this.getPage()}</div>
        </div>
      </ha-card>
    `;
  }


  private getPage(): TemplateResult {

    switch (this.route) {
      case "main":
        return html`
          <div class="view-content">
            <h3>${this.stateObj?.state === "Collecting" ? localize('main_screen.collection_status_enabled') : localize('main_screen.collection_status_disabled')}</h3>

            <div class="stat-list">
              <p class="stat-label">${localize('main_screen.last_sent_size')}</p>
              <p class="stat-value">${this.stateObj?.attributes["last_sent_size"] + "MB"}</p>

              <p class="stat-label">${localize('main_screen.total_sent_size')}</p>
              <p class="stat-value">${this.stateObj?.attributes["total_sent_size"] + "MB"}</p>

              <br style="margin-bottom: 16px;"/>

              <p class="stat-label">${localize('main_screen.last_sent_date')}</p>
              <p class="stat-value">${this.stateObj?.attributes["last_sent_date"]}</p>

              <p class="stat-label">${localize('main_screen.first_sent_date')}</p>
              <p class="stat-value">${this.stateObj?.attributes["first_sent_date"]}</p>
            </div>

            <div class="nav-btn-list">
              <a class="nav-btn" @click=${() => this.setRoute("data")}>${localize('routes.data')}</a>
              <a class="nav-btn" @click=${() => this.setRoute("terms")}>${localize('routes.terms')}</a>
            </div>
          </div>
        `
      case "data":
        return html`
          <div class="view-content">
            <h2>${localize('data_screen.header')}</h2>

            <div class="scroll-container">
              <h2>${localize('data_screen.id_header')}</h2>
              <h2>${this.stateObj?.attributes["uuid"]}</h2>
              <h3>${localize('data_screen.body')}</h3>

              <h2>Last sent data:</h2>
              ${
                this.stateObj?.attributes["last_sent_data"]
                ?
                html`
                  <p>You can view the exact data sent by downloading it as a JSON file</p>
                  <a
                    class="download-btn"
                    href=${"data:text/plain;charset=utf-8," + encodeURIComponent(this.stateObj?.attributes["last_sent_data"])}
                    download="last_sent_data.json"
                  >
                    Download Data
                  </a>
                `
                :
                html`
                  <p>No sent data was found. Have you just installed Crowdsourcerer? If so, nothing may have been sent yet</p>
                `
              }
              
            </div>

            <div class="nav-btn-list">
              <a class="nav-btn" @click=${() => this.setRoute("main")}>${localize('routes.back')}</a>
              <a class="nav-btn" @click=${() => this.setRoute("delete")}>${localize('routes.delete')}</a>
            </div>
          </div>
        `
      case "delete":
        return html`
          <div class="view-content">
            <h2>${localize('delete_screen.header')}</h2>

            <h3>${localize('delete_screen.body')}</h3>
            <h3>${localize('delete_screen.prompt')}</h3>

            <div class="nav-btn-list">
              <a class="nav-btn delete-data-btn" @click=${this.deleteData} >${localize('routes.delete_confirm')}</a>
              <a class="nav-btn" @click=${() => this.setRoute("data")}>${localize('routes.cancel')}</a>
            </div>
          </div>
        `
      case "terms":
        return html`
          <div class="view-content">
            <h2>${localize('terms_screen.header')}</h2>

            <div class="scroll-container">
              <h3>What is being collected and sent?</h3>
              <p class="terms-text">
                  All the sensor categories that you have authorized in the configuration are collected through Home Assistant's built-in 'History' integration, 
                  then are put through a clean-up process that ommits any sensitive information that might be present, such as names and addresses, before being sent.
                  You can see the exact data being sent in the 'Manage Data' menu, and reconfigure what sensor types are collected in the Crowdsourcerer integration configuration
                  through Home Assistant's integration settings.
              </p>

              <h3>Where is my data sent to, and how is it used?</h3>
              <p class="terms-text">
                  Data is sent to an API in University of Aveiro's Instituto de Telecomunicações, to be stored in a Data Lake. The goal of our collection is to assemble a dataset of smart home usage data to be
                  used in future research, which researchers will be able to export from the Data Lake.
                  Internally, data is associated to a unique ID given to you, with the sole purpose of deleting it if requested. This ID will not be accessible by
                  other users and cannot be traced back to you.
              </p>

              <h3>How can I have my data deleted?</h3>
              <p class="terms-text">
                  You can request to have your data deleted from the 'Manage Data' menu. Alternatively, you can contact our Data Protection Officer, although please
                  note that you will need to provide your unique ID. It is then of the utmost importance that you keep this ID in a safe place, in the event that you
                  uninstall the Crowdsourcerer integration or lose your ID somehow. You can see your unique ID in the 'Manage Data' menu.
              </p>

              <h3>Contacts:</h3>
              <p class="terms-text">Data Protection Officer: Diogo Gomes - dgomes@ua.pt</p>
            </div>


            <div class="nav-btn-list">
              <a class="nav-btn" @click=${() => this.setRoute("main")}>${localize('routes.back')}</a>
            </div>
          </div>
        `
        case "delete_success":
          return html`
          <div class="view-content">
            <h2>${localize('delete_screen.header')}</h2>

            <p>Your data has been deleted</p>
            <p>Keep in mind that data will continue to be sent in the future, as long as the Crowdsourcerer integration remains installed</p>

            <a class="nav-btn" @click=${() => this.setRoute("main")}>${localize('routes.return_to_main')}</a>
          </div>
        `
        case "delete_failure":
          return html`
          <div class="view-content">
            <h2>${localize('delete_screen.header')}</h2>

            <p>Uh oh, something went wrong...</p>
            <p>Your request could not be completed, please try again later, or contact our Data Protection Officer if the problem persists.</p>
            <br />
            <p>Data Protection Officer: Diogo Gomes - dgomes@ua.pt</p>

            <a class="nav-btn" @click=${() => this.setRoute("main")}>${localize('routes.return_to_main')}</a>
          </div>
        `
      default:
        return html`
          <div>
            <h2>${localize('error_screen.message')}</h2>
            <a class="nav-btn" @click=${() => this.setRoute("main")}>${localize('routes.return_to_main')}</a>
          </div>
        `
    }
  }


  private setRoute(route: string): void {
    this.route = route;
  }

  private deleteData(): void {
    const API_URL = "http://smarthouse.av.it.pt/api/ingest/data";

    fetch(API_URL, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Home-UUID": this.stateObj?.attributes["uuid"],
        "Access-Control-Allow-Origin": API_URL,
        //"Origin": 
      }
    })
    .then(resp => {
      if (resp.ok)
        this.setRoute("delete_success")
      else
        this.setRoute("delete_failure")
    })
    .catch(()=> {
      this.setRoute("delete_failure")
    })
  }

  private _showWarning(warning: string): TemplateResult {
    return html` <hui-warning>${warning}</hui-warning> `;
  }

  private _showError(error: string): TemplateResult {
    const errorCard = document.createElement('hui-error-card');
    errorCard.setConfig({
      type: 'error',
      error,
      origConfig: this.config,
    });

    return html` ${errorCard} `;
  }

  static get styles(): CSSResultGroup {
    return css`
      .view-content {
        display: flex;
        align-content: center;
        flex-direction: column;
        text-align: center;
        height: 350px;
      }

      .stat-list {
        padding: 16px;
      }

      .stat-list > .stat-label {
        display: inline-block;
        width: 69%;
        text-align: left;
        margin: 0;
      }

      .stat-list > .stat-value {
        display: inline-block;
        width: 29%;
        text-align: right;
        margin: 0;
      }

      .nav-btn-list {
        width: 60%;
        margin: auto;
      }

      .nav-btn {
        padding: 8px 12px;
        border: 1px solid var(--primary-text-color);
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
        display: inline-block;
      }

      .download-btn {
        padding: 8px 12px;
        border: 1px solid var(--primary-color);
        background-color: var(--primary-color);
        color: var(--primary-text-color);
        text-decoration: none;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
        display: inline-block;
      }

      .nav-btn-list > .nav-btn {
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 8px;
      }

      .nav-btn:hover {
        background-color: var(--primary-color);
      }

      .nav-btn.delete-data-btn:hover {
        background-color: red;
      }

      .terms-text {
        text-align: left;
      }

      .scroll-container {
        overflow-y: scroll;
        overflow-wrap: break-word;
        margin-bottom: 8px;
      }
    `;
  }
}
