import SendForm, { Field } from "../components/SendForm";

const formFields: Field[] = [
  {
    label: "Vorname und Nachname des Hundehalters",
    name: "name",
    type: "text",
    required: true,
  },
  {
    label: "Straße, PLZ und Ort",
    name: "address",
    type: "text",
    required: true,
  },
  {
    label: "Telefon für Rückfragen",
    name: "phone",
    type: "text",
    required: true,
  },
  {
    label: "Erstgespräch findet statt am",
    name: "meeting",
    type: "text",
    required: true,
  },
  {
    label: "E-Mail",
    name: "email",
    type: "email",
    required: true,
  },
  {
    label: "Name des Hundes",
    name: "dog_name",
    type: "text",
    required: true,
  },
  {
    label: "Rasse / Rassen bei Mischlingen",
    name: "dog_breed",
    type: "text",
    required: true,
  },
];

const Form = () => {
  return (
    <div className="container mx-auto">
      <div className="w-3/6 pt-10">
        <h1 className="font-bold font-serif uppercase text-3xl">
          Beratungsfragebogen
        </h1>
        <p>
          Dieser Fragebogen dient der Vorbereitung auf unser Erstgespräch und
          hilft bei der Diagnostik und Entwicklung des Trainingskonzeptes.
        </p>
      </div>
      <SendForm formFields={formFields} />
      <div className="my-48"></div>
    </div>
  );
};

export default Form;
