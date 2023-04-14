import React from "react";
import "../../styles/pages/leistungen/Kids.scss";
import Footer from "../../components/Footer";
import WaveSection from "../../components/WaveSection";
import TreatmentSection from "../../components/TreatmentSection";
const Kids = () => {
  return (
    <div className="kids-page-container">
      <section className="kids-first-container">
        <WaveSection
          header="Kieferorthopädie für Kinder und Jugendliche"
          content="Fällt ihnen etwas an der Zahnstellung ihres Kindes auf, oder hat Sie Ihr Hauszahnarzt darauf
          hingewiesen, dann zögern Sie nicht einen Beratungstermin zur vereinbaren. Gerade bei Kindern
          und Jugendlichen kann eine rechtzeitige Diagnose die Behandlungsdauer verkürzen und die
          Prognose verbessern."
        />
      </section>
      <section className="kids-treatment-container">
        <TreatmentSection
          image="url(../../imgs/AlignerfürTeenager.png)"
          cn="aligner-teen"
          size="150%"
          position="20%"
          reverse="false"
          color="#1f5ca2"
          header="Aligner für Teenager:"
          text="Aligner, auch als durchsichtige Zahnschienen bekannt, können auch bei jugendlichen
          Patienten zur Korrektur von Zahnfehlstellungen verwendet werden. Im Gegensatz zu
          traditionellen festen Zahnspangen haben Aligner einige Vorteile, die für Teenager attraktiv
          sein können. Zum einen sind Aligner fast unsichtbar, und somit bleiben sie in der Schule und Alltag
          nahezu unbemerkt, was für viele Teenager von Vorteil ist. Zum anderen können Aligner
          leicht herausgenommen werden, was beim Essen und Zähneputzen hilfreich sein kann.
          Dadurch wird es auch einfacher, eine gute Mundhygiene aufrechtzuerhalten."
        />
      </section>
      <section className="kids-treatment-container">
        <TreatmentSection
          image="url(../../imgs/feste.png)"
          cn="feste"
          reverse="true"
          color="#20ade4"
          header="Feste Zahnspange:"
          text="Eine feste Zahnspange ist eine effektive Behandlungsmethode für eine Vielzahl von
          Zahnfehlstellungen. Im Gegensatz zur herausnehmbaren Zahnspange ist mit der
          festsitzenden Zahnspange fast jede Zahnbewegung durchführbar.
          Eine feste Zahnspange besteht aus Brackets, die auf die Zahnoberfläche geklebt werden,
          sowie einem Bogen, der die Brackets miteinander verbindet und Druck auf die Zähne ausübt.
          Die Bögen der Zahnspange werden in regelmäßigen Abständen gewechselt bzw.
          angepasst, um den gewünschten Effekt zu erzielen. Wir haben in unserer Praxis die
          Möglichkeit, durch modernste Technik die kieferorthopädische Behandlung bestmöglich
          durchzuführen."
        />
      </section>
      <section className="kids-treatment-container">
        <TreatmentSection
          reverse="false"
          image="url(../../imgs/Herausnehmbare.jpeg)"
          cn="herausnehmbare"
          size="155%"
          position="70%"
          color="#1f5ca2"
          header="Herausnehmbare Zahnspangen:"
          text="Sie werden individuell aus Kunststoff für den Ober- bzw. Unterkiefer hergestellt und durch
          Drahtklammern gehalten. Mit eingearbeiteten Federn und Schrauben werden die
          notwendigen Zahnbewegungen durchgeführt. Insbesondere bei einer falschen Lage des
          Unterkiefers kommen für beide Kiefer aus einem Stück hergestellte Geräte wie Bionatoren
          oder Funktionsregler zum Einsatz."
        />
      </section>
      <section className="kids-treatment-container">
        <TreatmentSection
          image="url(../../imgs/Frühbehandlung.jpeg)"
          cn="frühbehandlung"
          reverse="true"
          color="#20ade4"
          header="Frühbehandlung:"
          text="Es gibt keinen zu frühen Besuch in der Kieferorthopädie. Bereits im Vorschulalter können
          Fehlentwicklungen erkannt und gezielt behandelt werden.
          Typische Gründe für eine Frühbehandlung, d.h. bereits im Milchgebiß oder im frühen
          Wechselgebiß sind: Kreuzbiß (einseitig oder beidseitig), umgekehrter Schneidezahnüberbiß,
          frontal offener Biß, Daumenlutschen, Fingernägelbeißen und behinderte Nasenatmung.
          Durch rechtzeitiges Erkennen und Reagieren lassen sich Schäden verhindern."
        />
      </section>
      <section className="kids-treatment-container">
        <TreatmentSection
          image="url(../../imgs/skelettale.png)"
          cn="skelettale"
          size="135%"
          position="50% 65%"
          reverse="flase"
          color="#1f5ca2"
          header="Skelettale Verankerung:"
          text="Skelettale Verankerung bezieht sich auf eine Technik, bei der Miniimplantate
          (Minischrauben) in das Knochengewebe eingesetzt werden, um stabile
          Verankerungspunkte für die Bewegung von Zähnen und Kiefer zu schaffen. Sie bietet eine
          Reihe von Vorteilen, insbesondere bei der Korrektur von komplexen Zahn- und
          Kieferfehlstellungen, die mit herkömmlichen Methoden schwer zu behandeln sind. Es
          ermöglicht auch eine gezielte Kraftanwendung auf die Zähne, was zu schnelleren
          Behandlungsergebnissen führen kann. In vielen Fällen kann die Extraktion von Zähnen
          umgangen werden, bzw. auf die Verwendung von extraoralen Geräten (Außenspangen,
          Headgear) verzichtet. Die Minischrauben werden in der Regel in einem minimalinvasiven
          chirurgischen Eingriff in das Knochengewebe eingeführt."
        />
      </section>
      <section className="kids-treatment-container">
        <TreatmentSection
          image="url(../../imgs/festenRetainer.png)"
          cn="retainer"
          size="135%"
          reverse="true"
          color="#20ade4"
          header="Feste Retainer:"
          text="Nach Abschluss der kieferorthopädischen Behandlung ist es notwendig, das erreichte
          Behandlungsergebnis über einen bestimmten Zeitraum zu stabilisieren. Zur optimalen
          Stabilisierung empfehlen wir einen festsitzenden Retainer. Dieser bietet den besten Schutz
          vor Veränderungen der Zahnstellungen. Der Retainerdraht wird an die Innenseite der
          Frontzähne, von außen unsichtbar, mit winzigen Klebestellen angebracht. Dort kann er über
          einen längeren Zeitraum belassen werden. Eine Zahnreinigung wird dadurch nicht behindert.
          In anfangs vierteljährlichen und später halbjährlichen Kontrollen wird der Retainer auf
          Funktionalität überprüft."
        />
      </section>
      <section className="kids-eight-container">
        <Footer />
      </section>
    </div>
  );
};

export default Kids;
