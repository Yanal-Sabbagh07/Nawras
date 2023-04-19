import React from "react";
import "../../styles/pages/leistungen/Adults.scss";
import Footer from "../../components/Footer";
import WaveSection from "../../components/WaveSection";
import TreatmentSection from "../../components/TreatmentSection";
const Adults = () => {
  return (
    <div className="adults-page-container">
      <section className="adults-first-container">
        <WaveSection
          header="Kieferorthopädie für Erwachsene"
          content="Vielen Patienten ist nicht bewusst welche Möglichkeiten auch im Erwachsenenalter
          bestehen um Zahnfehstellungen zu korrigieren. Dank moderner Verfahren lassen sich Zähne
          und Kieferfehlstellungen heutzutage in jedem Alter korrigieren. Für unsere Patienten, die
          besonderen Wert auf die Ästhetik während des  Behandlungzeitraums legen, bieten wir
          zahlreiche unsichtbare Zahnkorrekturen an, die diesem Anspruch gerecht werden."
        />
      </section>
      <section className="adults-treatment-container">
        <TreatmentSection
          image="url(../../imgs/AlignerTherapie.jpeg)"
          cn="aligner"
          color="#1f5ca2"
          header="Aligner Therapie:"
          text="Bei der Aligner-Therapie werden durchsichtige Kunststoffschienen, die als Aligner bezeichnet
          werden, verwendet.
          Aligner-Therapie beginnt mit einem digitalen Scan der Zähne, der verwendet wird, um einen
          3D-Plan der Behandlung zu erstellen. Basierend auf diesem Plan werden individuelle Aligner-
          Schienen hergestellt, die den Zähnen des Patienten entsprechen und schrittweise angepasst
          werden, um die Zähne in die gewünschte Position zu bewegen.
          Aligner-Therapie ist eine Alternative zu traditionellen festen Zahnspangen und bietet
          mehrere Vorteile. Im Gegensatz zu herkömmlichen festen Zahnspangen sind Aligner fast
          unsichtbar und können leicht herausgenommen werden, was es dem Patienten ermöglicht,
          normal zu essen und zu trinken und eine gute Mundhygiene aufrechtzuerhalten."
        />
      </section>
      <section className="adults-treatment-container">
        <TreatmentSection
          reverse="true"
          image="url(../../imgs/Ästhetische.png)"
          cn="ästhetische"
          color="#20ade4"
          header="Ästhetische Keramik Brackets:"
          text="Anstelle der normalerweise aus Metall gefertigten Brackets können auf besonderen Wunsch
          zahnnfarbene Keramikbrackets verwendet werden, die auch hohen ästhetischen
          Anforderungen während der Behandlungszeit gerecht werden. Die Oberfläche der Brackets
          sind so versiegelt, dass eine Verfärbung durch Nahrungsmittel während des gesamten
          Behandlungszeitraumes ausgeschlossen ist. Deswegen fallen diese Brackets weniger auf."
        />
      </section>

      <section className="adults-treatment-container">
        <TreatmentSection
          image="url(../../imgs/präprothetische.jpeg)"
          cn="Präprothetische"
          reverse="flase"
          color="#1f5ca2"
          header="Präprothetische Kieferorthopädie:"
          text="In der präprothetischen Kieferorthopädie verändern wir die Zahnstellung, um die
          Versorgung mit Zahnimplantaten, einer Brücke oder Prothese zu ermöglichen. Denn nur,
          wenn die sogenannten Pfeilerzähne (an denen der Zahnersatz befestigt wird) gerade sind,
          können sie vor Fehlbelastungen geschützt werden. Dabei werden häufig
          kieferorthopädische Apparaturen wie Brackets oder Aligner eingesetzt, um die Zähne so zu
          bewegen, dass die prothetische Versorgung perfekt angefertigt werden kann, um eine
          optimale Funktion und Ästhetik zu gewährleisten."
        />
      </section>
      <section className="adults-treatment-container">
        <TreatmentSection
          image="url(../../imgs/kombinierte.jpeg)"
          cn="Kombinierte"
          reverse="true"
          color="#20ade4"
          header="Kombinierte Kieferorthopädisch-kieferchirurgische Therapie:"
          text="Die kombinierte Kieferorthopädisch-kieferchirurgische Therapie, auch bekannt als
          orthognathe Chirurgie, ist eine Behandlungsoption für Patienten mit schweren
          Kieferanomalien, die nicht allein mit kieferorthopädischen Maßnahmen korrigiert werden
          können.
          Die Behandlung kann umfangreich sein und erfordert möglicherweise eine längere
          Genesungszeit. Sie kann dazu beitragen, schwerwiegende Kieferprobleme zu
          korrigieren und eine verbesserte Lebensqualität zu bieten.
          Wir arbeiten eng mit erfahrenen Mund-Kiefer-Gesichtschirurgen"
        />
      </section>
      <section className="adults-treatment-container">
        <TreatmentSection
          image="url(../../imgs/digitale.png)"
          cn="Digitale"
          reverse="flase"
          color="#1f5ca2"
          header="Digitale Kieferorthopädie:"
          text="Durch den Einsatz digitaler Technologien in der Kieferorthopädie kann die Behandlung
          schneller, effektiver und präziser durchgeführt werden. Dies kann dazu beitragen, die
          Behandlungsergebnisse zu verbessern und den Patienten mehr Komfort zu bieten.
          In unserer Praxis bieten wir modernste digitale Kieferorthopädie an. Auch die
          Behandlungsplanung wird mit genausten digitalen Methoden durchgeführt.
          Die konventionellen, unangenehmen Alginatabdrücke werden durch den digitalen
          Intraoralscan ersetzt. Nicht nur Aligner werden bei und im digitalen Verfahren angefertigt,
          sonderen auch CAD/CAM-Retainer und die indirekte Platzierung von Brackets."
        />
      </section>
      <section className="adults-treatment-container">
        <TreatmentSection
          image="url(../../imgs/Redzidiv-Behandlung.png)"
          cn="Rezidiv"
          reverse="true"
          color="#20ade4"
          header="Rezidiv-Behandlung:"
          text="Vielen Patienten ist nicht bewusst, dass das Ende einer kieferorthopädischen Behandlung in
          der Regel der Anfang der Retentionsphase ist. Wird in dieser Phase die Haltespange nicht
          regelmäßig getragen, verschieben sich die Zähne zurück in die Ausgangsituation und es
          entsteht wieder eine Fehlstellung, die die Ästhetik und Funktion stören könnte. Dieser
          Fehlstand kann mit der Rezidivbehandlung wieder korrigiert werden und mit einem festen
          Retainer stabilisiert werden."
        />
      </section>
      <section className="adults-eight-container">
        <Footer />
      </section>
    </div>
  );
};

export default Adults;
