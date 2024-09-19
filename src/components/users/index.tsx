import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserSearch } from "lucide-react";
import { Button } from "../ui/button";

export default function Users() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {/* Card 1 */}
          <Card className="p-4 border rounded-lg shadow-md">
            <CardContent className="flex flex-col items-center">
              {/* Avatar */}
              <Avatar className="w-20 h-20 my-4">
                <AvatarImage src="https://avatars.githubusercontent.com/u/158373467?v=4" />
                <AvatarFallback>GM</AvatarFallback>
              </Avatar>
              
              {/* Nome e Cargo */}
              <div className="text-center mb-4">
                <h2 className="text-lg font-semibold">Gustavo Monteiro</h2>
                <p className="text-sm text-gray-600">Estágiario</p>
              </div>

              {/* User Information */}
              <div className="text-center mb-6">
                <p className="text-base font-bold">Nível de acesso:</p>
                <p className="text-sm text-gray-500 mb-2">Administrador</p>
                <p className="text-base font-bold">Contato:</p>
                <p className="text-sm text-gray-500 mb-2">teste@gmail.com</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <Button>Editar</Button>
                <Button variant="destructive">Deletar</Button>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="p-4 border rounded-lg shadow-md">
            <CardContent className="flex flex-col items-center">
              {/* Avatar */}
              <Avatar className="w-20 h-20 mb-4">
                <AvatarFallback>
                  <span className="text-yellow-400">⭐</span>
                </AvatarFallback>
              </Avatar>
              {/* Title and Price */}
              <div className="text-center mb-4">
                <h2 className="text-lg font-semibold">Actor, Film Director</h2>
                <p className="text-sm text-gray-600">€9/hour</p>
              </div>
              {/* User Information */}
              <div className="text-center mb-4">
                <p className="text-base font-bold">Baltasar Kormákur, 52</p>
                <p className="text-sm text-gray-500">Reykjavik, Iceland</p>
                <p className="text-sm text-gray-500">Icelandic actor, theater and film director, and film producer.</p>
              </div>
              {/* Buttons */}
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded-md">View CV</button>
                <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md">Make Offer</button>
              </div>
            </CardContent>
          </Card>
        </div>
    );
}