import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";

import pachequinImg from '../app/assets/pachequin.jpg';
import lajefaImg from '../app/assets/la jefa.jpg';
import busatinhoImg from '../app/assets/busatinho.jpg';
import termitaImg from '../app/assets/termita.jpg';
import leopolditoImg from '../app/assets/leopoldito.jpg';
import embassadorImg from '../app/assets/embassador.jpg';
import uadeboys from '../app/assets/UADE.jpg'
import { StaticImageData } from "next/image"; // Add this import for StaticImageData


interface Drink {
  id: string; // Para rutas dinámicas
  name: string;
  ingredients: string;
  price: string;
  color: string;
  image: StaticImageData; // Tipo corregido para usar imágenes importadas
}

export default function DrinksMenu() {
  const drinks: Drink[] = [
    {
      id: "pachequin",
      name: "PACHEQUIN",
      ingredients: "Cynar, jugo de pomelo, soda, dash de agua tónica",
      price: "$60",
      color: "bg-green-500/20",
      image: pachequinImg,
    },
    {
      id: "leopoldito",
      name: "LEOPOLDITO",
      ingredients: "Gin, agua tónica, jugo de lima, hojas de menta",
      price: "$65",
      color: "bg-blue-500/20",
      image: leopolditoImg,
    },
    {
      id: "embassador-tonic",
      name: "EMBASSADOR TONIC",
      ingredients: "Gin, agua tónica, Aperol, rodaja de naranja",
      price: "$70",
      color: "bg-orange-500/20",
      image: embassadorImg,
    },
    {
      id: "la-jefa",
      name: "LA JEFA",
      ingredients: "Vino tinto, soda, jugo de naranja natural",
      price: "$75",
      color: "bg-purple-500/20",
      image: lajefaImg,
    },
    {
      id: "busatinho",
      name: "BUSATÑO",
      ingredients: "Vodka, jugo de pomelo, azúcar, splash de Chandon",
      price: "$68",
      color: "bg-pink-500/20",
      image: busatinhoImg,
    },
    {
      id: "termita",
      name: "TERMITA",
      ingredients: "Fernet, Coca-Cola, jugo de lima, borde azucarado",
      price: "$62",
      color: "bg-brown-500/20",
      image: termitaImg,
    },
    {
      id: "UADE-boys",
      name: "UADE boys",
      ingredients: "Gin, aperol, naranja, pomelo, sprite",
      price: "$62",
      color: "bg-red-500/20",
      image: uadeboys,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-12 text-center text-4xl font-bold tracking-wider text-white">
          DATA BROS BAR
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {drinks.map((drink) => (
            <Link href={`/drinks/${drink.id}`} key={drink.id}>
              <Card className="relative overflow-hidden border-0 bg-zinc-800/50 p-6 backdrop-blur-sm cursor-pointer">
                <div
                  className={`absolute inset-0 ${drink.color} blur-xl transition-all duration-300 group-hover:blur-2xl`}
                />
                <div className="relative">
                  {/* Imagen del trago */}
                  <div className="w-full h-56 sm:h-72 md:h-50 lg:h-76 relative">
                    <Image
                      src={drink.image}
                      alt={drink.name}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                  {/* Contenido textual */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-zinc-800/50 backdrop-blur-sm z-10">
                    <h3 className="text-lg font-bold text-yellow-500">{drink.name}</h3>
                    <p className="text-sm text-zinc-400">{drink.ingredients}</p>
                    <p className="text-xl font-bold text-white">{drink.price}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
