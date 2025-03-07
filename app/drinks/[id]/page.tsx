'use client';
import { useRouter } from "next/navigation";
import Image from "next/image";
import pachequinImg from '../../assets/pachequin.jpg';
import lajefaImg from '../../assets/la jefa.jpg';
import busatinhoImg from '../../assets/busatinho.jpg';
import termitaImg from '../../assets/termita.jpg';
import leopolditoImg from '../../assets/leopoldito.jpg';
import embassadorImg from '../../assets/embassador.jpg';
import uadeboys from '../../assets/UADE.jpg';
import brunenger from '../../assets/brunenger.jpg'
import { StaticImageData } from "next/image"; // Add this import for StaticImageData

interface Drink {
  id: string;
  name: string;
  ingredients: string;
  price: string;
  color: string;
  image: StaticImageData;
  description: string;
}

const drinksData: Drink[] = [
  {
    id: "pachequin",
    name: "PACHEQUIN",
    ingredients: "Cynar, jugo de pomelo, soda, dash de agua tónica",
    price: "$60",
    color: "bg-green-500/20",
    image: pachequinImg,
    description: "Un traguito solo para los tipos chill de cojones. Relajado, amargo y suave como pachequin. Arrancas a tomarlo y sin darte cuenta estas metiendo horas extras, pero con 700 rewards points."
  },
  {
    id: "leopoldito",
    name: "LEOPOLDITO",
    ingredients: "Vodka, jugo de pomelo, azúcar, splash de Chandon",
    price: "$65",
    color: "bg-blue-500/20",
    image: leopolditoImg,
    description: "Si fumas siete atados por dia y no tenes pulmones para correr, tomate un leopoldito que te va a hacer correr como loco treinta minutos. Y tranqui que después te fumas otros siete atados y seguis espléndido!"
  },
  {
    id: "embassador-tonic",
    name: "EMBASSADOR TONIC",
    ingredients: "Gin, agua tónica, Aperol, rodaja de naranja",
    price: "$70",
    color: "bg-orange-500/20",
    image: embassadorImg,
    description: "ALERTA: Este trago es tan pero tan rico que si te escabiás mucho serás la última persona en llegar a la oficina pero la primera en irte. Si tenes que entrar a las 9, mejor pasarte a las 11 asi no madrugás."
  },
  {
    id: "la-jefa",
    name: "LA JEFA",
    ingredients: "Vino tinto, soda, jugo de naranja natural",
    price: "$75",
    color: "bg-purple-500/20",
    image: lajefaImg,
    description: "Un vinito pa relajar mientras te olvidas de agregar los venv al .gitignore, que rico no? OJO, no te escabies mucho con este trago porque sino vas a empezar a hablar en salteño hasta por los codos."
  },
  {
    id: "busatinho",
    name: "BUSATIÑO",
    ingredients: "vodka, jugo de lima y un dash de agua tónica",
    price: "$68",
    color: "bg-pink-500/20",
    image: busatinhoImg,
    description: "Las malas lenguas dicen que si tomas este trago vas a empezar a utilizar la palabra 'sunshines' y no trabajarás en todo el día. Un cursito atrás del otro y que laburen los no senior mientras inspeccionas un poco 'Cocodrilo'."
  },
  {
    id: "termita",
    name: "TERMITA",
    ingredients: "Fernet, Coca-Cola, jugo de lima, borde azucarado",
    price: "$62",
    color: "bg-brown-500/20",
    image: termitaImg,
    description: "Un buen cordobés muy paciente y dulce. Hay un mito sobre la termita, el cual se dice por los pueblos de Córdoba, que si dejas algo en la mesa él se encargará de comerlo. El 19 lo veremos y esperemos que todos puedan comer."
  },
  {
    id: "UADE-boys",
    name: "UADE boys",
    ingredients: "Gin, aperol, naranja, pomelo, sprite",
    price: "$62",
    color: "bg-red-500/20",
    image: uadeboys,
    description: "Este trago es solo para los tipos cool que les gusta borrar bases de datos, leer mangas y programar con IA. Si estás haciendo volumen, este trago es ideal para vos! no hace falta que te lleves bananas de la ofi a tu casa."
  },
  {
    id: "Brunenger",
    name: "Brunenger",
    ingredients: "Ron, limón, pomelo, sprite",
    price: "$62",
    color: "bg-red-500/20",
    image: brunenger,
    description: "Este trago es solo para los nuevitos loleros que andan sufriendo mal de amores (todos). Mucha más info no tiene este trago, pero ron, pomelo y sprite? fuerte al medio o te gusta o te encanta",
  }
];

export default function DrinkDetails({ params }: { params: { id: string } }) {
  const router = useRouter();  // Get the router object
  const drink = drinksData.find(d => d.id === params.id);

  if (!drink) {
    return (
      <div className="min-h-screen bg-zinc-900 p-8 text-white">
        <h1 className="text-4xl font-bold">Bebida no encontrada</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 p-8">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => router.back()}  // Go back to the previous page
          className="text-yellow-500 mb-4 p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-all"
        >
          Volver
        </button>

        {/* Imagen destacada */}
        <div className="relative mb-8">
          <Image
            src={drink.image}
            alt={drink.name}
            width={800}
            height={600}
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Detalles de la bebida */}
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">{drink.name}</h1>
        <p className="text-lg text-zinc-300 mb-4">{drink.ingredients}</p>
        <p className="text-lg text-zinc-400 mb-8">{drink.description}</p>
      </div>
    </div>
  );
}
