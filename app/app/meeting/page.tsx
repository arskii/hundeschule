import MainButton from "../components/MainButton";
import Checkbox from "./Checkbox";
import Question from "./Question";
import Textfield from "./Textfield";

const Meeting = () => {
  return (
    <div className="container mx-auto">
      <div className="w-3/6 pt-10">
        <h1 className="font-bold font-serif uppercase text-3xl">
          Online termin
        </h1>
        <p>
          Herzlich Willkommen bei der Online-Terminbuchung unserer Hundeschule!
        </p>
        <p>Wir freuen uns sehr, dass du vorbeischaust!</p>
      </div>
      <div className="flex flex-col py-10 gap-y-10">
        <h2 className="font-bold font-serif">Fragen zum Termin</h2>
        <Question title="Bist du bereits Kunde?">
          <Checkbox label="Ja" />
          <Checkbox label="Nein" />
        </Question>
        <Question title="Wofür möchtest du einen Termin buchen ?">
          <Checkbox label="Erststunde" />
          <Checkbox label="Folgestunde" />
        </Question>
        <Question title="Terminauswahl Bitte wähle den für Dich passenden Termin aus.">
          <Checkbox label="" />
        </Question>
        <Question title="Vorname und Nachname des Hundehalters">
          <Textfield />
        </Question>
        <Question title="Straße, PLZ und Ort">
          <Textfield />
        </Question>
        <Question title="Telefon für Rückfragen">
          <Textfield />
        </Question>
        <Question title="Erstgespräch findet statt am">
          <Textfield />
        </Question>
        <Question title="E-Mail">
          <Textfield />
        </Question>
        <Checkbox
          label={`Hiermit bestätige ich die "Impressum & AGB" gelesen zu haben.`}
        />
      </div>
      <MainButton text="Termin buchen" link="" />
      <div className="my-48"></div>
    </div>
  );
};

export default Meeting;
