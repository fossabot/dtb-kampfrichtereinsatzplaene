import { Body1Strong, Button, Caption1Strong, Checkbox, Divider, Field, FluentProvider, Input, Spinner, Textarea, webDarkTheme, webLightTheme } from "@fluentui/react-components";
import { getCurrentWebviewWindow } from "@tauri-apps/api/webviewWindow";
import React from "react";
import "./BugReporter.css";
import { LaptopPersonFilled, MailboxFilled, TargetFilled, SendFilled, ErrorCircleFilled } from "@fluentui/react-icons";
import { invoke } from "@tauri-apps/api/core";

export default class BugReporter extends React.Component<{}, {isLight: boolean, title: string | null, name: string | null , mail: string | null, subject: string, message: string, sendLogs: boolean, loadingState: "initial" | "loading" | "error", errorText: string | null, errorTextClass: "none" | "errorText" | "successText"}> {

    constructor(props: {}) {
        super(props);
        this.state = {
          isLight: true,
          title: null,
          name: null,
          mail: null,
          subject: "[BEISPIELBETREFF]",
          message: "[BEISPIELNACHRICHT]",
          sendLogs: false,
          loadingState: "initial",
          errorText: null,
          errorTextClass: "none",
        }
    }

    buttonIcon() {
      if(this.state.loadingState === "loading") {
        return <Spinner size="tiny" />;
      } else if (this.state.loadingState === "initial") {
        return <SendFilled />;
      } else {
        return <ErrorCircleFilled />;
      }
    }

    componentDidMount(): void {
        const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
        darkModePreference.matches ? this.setState({isLight: false}) : this.setState({isLight: true})
        darkModePreference.addEventListener("change", e => e.matches ? this.setState({isLight: false}) : this.setState({isLight: true}));
    }

    async submit() {
        this.setState({loadingState: "loading", errorTextClass: "none", errorText: null});
        if(this.state.name === "") {
          this.setState({name: null});
        }
        if(this.state.mail === "") {
          this.setState({mail: null});
        };
        invoke("send_mail_from_frontend", { name: this.state.name, mail: this.state.mail, subject: this.state.subject, message: this.state.message, sendlogs: this.state.sendLogs, kind: this.state.title }).then((response) => {
          if(response === "NoError") {
            this.setState({errorText: "Mail wurde erfolgreich verschickt! Das Fenster kann geschlossen werden.", errorTextClass: "successText"});
            this.setState({loadingState: "initial"});
          } else {
            this.setState({errorText: "Mail konnte nicht verschickt werden. Bitte die Logs überprüfen.", errorTextClass: "errorText"});
            this.setState({loadingState: "error"});
          }
        });
    }

    async setTitle() {
        this.setState({title: await getCurrentWebviewWindow().title()});
    }

    render() {

        if(this.state.title === null) {
          this.setTitle();
        }

        return(
            <>
              <FluentProvider theme={this.state.isLight ? webLightTheme : webDarkTheme}>
                <div id="mainContents">
                  <Body1Strong>E-Mail an die Entwickler senden:</Body1Strong>
                  <Divider inset={true} id="divider" />
                  <Field label={"Name:"} >
                    <Input type="text" placeholder="Vorname Nachname" onInput={(ev) => this.setState({name: ev.currentTarget.value})} contentBefore={<LaptopPersonFilled />} autoCapitalize={"off"} autoCorrect={"off"} />
                  </Field>
                  <Field label={"E-Mail:"}>
                    <Input type="email" placeholder="person@domain.de" onInput={(ev) => this.setState({mail: ev.currentTarget.value})} contentBefore={<MailboxFilled />} autoCapitalize={"off"} autoCorrect={"off"} />
                  </Field>
                  <Field label={"Betreff:"} required={true} >
                    <Input type="text" placeholder="BUG/FEEDBACK/SUPPORT für..." onInput={(ev) => this.setState({subject: ev.currentTarget.value})} contentBefore={<TargetFilled />} autoCapitalize={"off"} autoCorrect={"off"} />
                  </Field>
                  <Field label={"Nachricht:"} id="nachrichtField" required={true} >
                    <Textarea placeholder="Mir ist Folgendes aufgefallen: [...]" id="nachricht" resize="none" onInput={(ev) => this.setState({message: ev.currentTarget.value})} autoCapitalize={"off"} autoCorrect={"off"} />
                  </Field>
                  <Checkbox label={"Logs mitsenden?"} defaultChecked={this.state.sendLogs} onChange={(_ev, data) => this.setState({sendLogs: data.checked as boolean})} />
                  <div id="buttonDiv">
                    <Caption1Strong className={this.state.errorTextClass}>{this.state.errorText}</Caption1Strong>
                    <div className="spacer"></div>
                    <Button appearance="primary" onClick={() => this.submit()} icon={this.buttonIcon()} disabledFocusable={this.state.loadingState !== "initial"} >Absenden</Button>
                    <Button appearance="secondary" onClick={() => getCurrentWebviewWindow().close()} disabledFocusable={this.state.loadingState !== "initial"} >Abbrechen</Button>
                  </div>
                </div>
              </FluentProvider>
            </>
        );
    }
}