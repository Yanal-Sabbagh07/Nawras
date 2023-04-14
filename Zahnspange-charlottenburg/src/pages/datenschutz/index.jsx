import React from "react";
import "../../styles/pages/datenschutz/Datenschutz.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../../components/Footer";
const Index = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="datenschutz-page-container">
      <div className="datenschutz-wrapper">
        <div className="title-container">
          <h1>Datenschutz</h1>
          <div className="line"></div>
        </div>
        <div className="section-1-container">
          <section className="section-1">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              style={{ boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="ex-icon" />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                style={{ margin: "0px", padding: "0px" }}
              >
                <h3>1. Datenschutz auf einen Blick</h3>
              </AccordionSummary>
              <h4>Allgemeine Hinweise</h4>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können. Ausführliche
                Informationen zum Thema Datenschutz entnehmen Sie unserer unter
                diesem Text aufgeführten Datenschutzerklärung.
              </p>
              <h4>Datenerfassung auf unserer Website</h4>
              <h4>
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </h4>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
                dieser Website entnehmen.
              </p>
              <h4>Wie erfassen wir Ihre Daten?</h4>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben.
              </p>
              <p>
                Andere Daten werden automatisch beim Besuch der Website durch
                unsere IT-Systeme erfasst. Das sind vor allem technische Daten
                (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
                Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
                sobald Sie unsere Website betreten.
              </p>
              <h4>Wofür nutzen wir Ihre Daten?</h4>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten können
                zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
              <p>
                Sie haben jederzeit das Recht unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu
                verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
                können Sie sich jederzeit unter der im Impressum angegebenen
                Adresse an uns wenden. Des Weiteren steht Ihnen ein
                Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p>
                Außerdem haben Sie das Recht, unter bestimmten Umständen die
                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung
                unter „Recht auf Einschränkung der Verarbeitung“.
              </p>
              <h4>Analyse-Tools und Tools von Drittanbietern</h4>
              <p>
                Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch
                ausgewertet werden. Das geschieht vor allem mit Cookies und mit
                sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens
                erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu
                Ihnen zurückverfolgt werden. Sie können dieser Analyse
                widersprechen oder sie durch die Nichtbenutzung bestimmter Tools
                verhindern. Detaillierte Informationen dazu finden Sie in der
                folgenden Datenschutzerklärung.
              </p>
              <p>
                Sie können dieser Analyse widersprechen. Über die
                Widerspruchsmöglichkeiten werden wir Sie in dieser
                Datenschutzerklärung informieren.
              </p>
            </Accordion>
            <div className="line"></div>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              style={{ boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="ex-icon" />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                style={{ margin: "0px", padding: "0px" }}
              >
                <h3>2. Allgemeine Hinweise und Pflichtinformationen</h3>
              </AccordionSummary>

              <h4>Datenschutz</h4>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend der gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Wenn Sie diese Website benutzen, werden verschiedene
                personenbezogene Daten erhoben. Personenbezogene Daten sind
                Daten, mit denen Sie persönlich identifiziert werden können. Die
                vorliegende Datenschutzerklärung erläutert, welche Daten wir
                erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
                welchem Zweck das geschieht.
              </p>
              <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet
                (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
                aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
                durch Dritte ist nicht möglich.
              </p>
              <h4>Hinweis zur verantwortlichen Stelle</h4>
              <h4>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </h4>
              <p>Dr. Nawras Darkazanly</p>
              <p>
                Richard-Wagner-Platz 3 <br /> 10585 Berlin
              </p>
              <p>Telefon: 030 3414060</p>
              <p>E-Mail: info@zahnspange-charlottenburg.de</p>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten (z.B.
                Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
              <h4>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                ausdrücklichen Einwilligung möglich. Sie können eine bereits
                erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine
                formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der
                bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
                unberührt.
              </p>
              <h4>
                Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
                sowie gegen Direktwerbung (Art. 21 DSGVO)
              </h4>
              <p>
                Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit.
                e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus
                Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen
                die Verarbeitung Ihrer personenbezogenen Daten Widerspruch
                einzulegen; dies gilt auch für ein auf diese Bestimmungen
                gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen
                eine Verarbeitung beruht, entnehmen Sie dieser
                Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir
                Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten,
                es sei denn, wir können zwingende schutzwürdige Gründe für die
                Verarbeitung nachweisen, die Ihre Interessen, Rechte und
                Freiheiten überwiegen oder die Verarbeitung dient der
                Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                (Widerspruch nach Art. 21 Abs. 1 DSGVO).
              </p>
              <p>
                Werden Ihre personenbezogenen Daten verarbeitet, um
                Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit
                Widerspruch gegen die Verarbeitung Sie betreffender
                personenbezogener Daten zum Zwecke derartiger Werbung
                einzulegen; dies gilt auch für das Profiling, soweit es mit
                solcher Direktwerbung in Verbindung steht. Wenn Sie
                widersprechen, werden Ihre personenbezogenen Daten anschließend
                nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch
                nach Art. 21 Abs. 2 DSGVO).
              </p>
              <h4>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
                Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
                Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das
                Beschwerderecht besteht unbeschadet anderweitiger
                verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>
              <h4>Recht auf Datenübertragbarkeit</h4>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erfüllung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem gängigen,
                maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                direkte Übertragung der Daten an einen anderen Verantwortlichen
                verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>
              <h4>SSL- bzw. TLS-Verschlüsselung</h4>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
                oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
                erkennen Sie daran, dass die Adresszeile des Browsers von
                “http://” auf “https://” wechselt und an dem Schloss-Symbol in
                Ihrer Browserzeile.
              </p>
              <p>
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
                Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
                werden.
              </p>
              <h4>Auskunft, Sperrung, Löschung und Berichtigung</h4>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
                auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu
                sowie zu weiteren Fragen zum Thema personenbezogene Daten können
                Sie sich jederzeit unter der im Impressum angegebenen Adresse an
                uns wenden.
              </p>
              <h4>Recht auf Einschränkung der Verarbeitung</h4>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Hierzu können Sie sich
                jederzeit unter der im Impressum angegebenen Adresse an uns
                wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
                folgenden Fällen:
              </p>
              <ul>
                <li>
                  Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                  personenbezogenen Daten bestreiten, benötigen wir in der Regel
                  Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben
                  Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn die Verarbeitung Ihrer personenbezogenen Daten
                  unrechtmäßig geschah / geschieht, können Sie statt der
                  Löschung die Einschränkung der Datenverarbeitung verlangen.
                </li>
                <li>
                  Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen,
                  Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung
                  von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                  Löschung die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                  haben, muss eine Abwägung zwischen Ihren und unseren
                  Interessen vorgenommen werden. Solange noch nicht feststeht,
                  wessen Interessen überwiegen, haben Sie das Recht, die
                  Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                  zu verlangen.
                </li>
              </ul>
              <p>
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
                abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
                Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
                der Rechte einer anderen natürlichen oder juristischen Person
                oder aus Gründen eines wichtigen öffentlichen Interesses der
                Europäischen Union oder eines Mitgliedstaats verarbeitet werden
              </p>
              <h4>Widerspruch gegen Werbe-E-Mails</h4>
              <p>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
                Kontaktdaten zur Übersendung von nicht ausdrücklich
                angeforderter Werbung und Informationsmaterialien wird hiermit
                widersprochen. Die Betreiber der Seiten behalten sich
                ausdrücklich rechtliche Schritte im Falle der unverlangten
                Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
              </p>
            </Accordion>
            <div className="line"></div>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              style={{ boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="ex-icon" />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                style={{ margin: "0px", padding: "0px" }}
              >
                <h3>3. Datenerfassung auf unserer Website</h3>
              </AccordionSummary>

              <h4>Cookies</h4>
              <p>
                Die Internetseiten verwenden teilweise so genannte Cookies.
                Cookies richten auf Ihrem Rechner keinen Schaden an und
                enthalten keine Viren. Cookies dienen dazu, unser Angebot
                nutzerfreundlicher, effektiver und sicherer zu machen. Cookies
                sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden
                und die Ihr Browser speichert.
              </p>
              <p>
                Die meisten der von uns verwendeten Cookies sind so genannte
                “Session-Cookies”. Sie werden nach Ende Ihres Besuchs
                automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät
                gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es
                uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
              </p>
              <p>
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen
                von Cookies informiert werden und Cookies nur im Einzelfall
                erlauben, die Annahme von Cookies für bestimmte Fälle oder
                generell ausschließen sowie das automatische Löschen der Cookies
                beim Schließen des Browser aktivieren. Bei der Deaktivierung von
                Cookies kann die Funktionalität dieser Website eingeschränkt
                sein.
              </p>
              <p>
                Cookies, die zur Durchführung des elektronischen
                Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von
                Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion)
                erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes
                Interesse an der Speicherung von Cookies zur technisch
                fehlerfreien und optimierten Bereitstellung seiner Dienste.
                Soweit andere Cookies (z.B. Cookies zur Analyse Ihres
                Surfverhaltens) gespeichert werden, werden diese in dieser
                Datenschutzerklärung gesondert behandelt.
              </p>
              <h4>Server-Log-Dateien</h4>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in so genannten Server-Log-Dateien, die Ihr
                Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul>
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen.
              </p>
              <p>
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
                1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
                Interesse an der technisch fehlerfreien Darstellung und der
                Optimierung seiner Website – hierzu müssen die Server-Log-Files
                erfasst werden.
              </p>
              <h4>Kontaktformular</h4>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
              </p>
              <p>
                Die Verarbeitung der in das Kontaktformular eingegebenen Daten
                erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung
                (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung
                jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per
                E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
              </p>
              <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
                zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung
                Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
                insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </Accordion>
            <div className="line"></div>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              style={{ boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="ex-icon" />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                style={{ margin: "0px", padding: "0px" }}
              >
                <h3>4. Plugins und Tools</h3>
              </AccordionSummary>

              <h3>Google Maps</h3>
              <p>
                Diese Seite nutzt über eine API den Kartendienst Google Maps.
                Anbieter ist die Google Inc., 1600 Amphitheatre Parkway,
                Mountain View, CA 94043, USA.
              </p>
              <p>
                Zur Nutzung der Funktionen von Google Maps ist es notwendig,
                Ihre IP Adresse zu speichern. Diese Informationen werden in der
                Regel an einen Server von Google in den USA übertragen und dort
                gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf
                diese Datenübertragung.
              </p>
              <p>
                Die Nutzung von Google Maps erfolgt im Interesse einer
                ansprechenden Darstellung unserer Online-Angebote und an einer
                leichten Auffindbarkeit der von uns auf der Website angegebenen
                Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6
                Abs. 1 lit. f DSGVO dar.
              </p>
              <p>
                <span>
                  Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in
                  der Datenschutzerklärung von Google:{" "}
                  <a
                    href="https://www.google.de/intl/de/policies/privacy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.google.de/intl/de/policies/privacy/
                  </a>
                  .
                </span>
              </p>
            </Accordion>
            <div className="line"></div>
          </section>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
