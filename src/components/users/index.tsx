import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserSearch } from "lucide-react";

export default function Users() {
    return (
        <Card className="flex-1">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Últimos acessos
              </CardTitle>
              <UserSearch className="ml-auto w-5 h-5"/>
            </div>
            <CardDescription>
              Usuários recentes das últimas 24h
            </CardDescription>
          </CardHeader>

          <CardContent>
            <article className="flex items-center gap-2 border-b py-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://avatars.githubusercontent.com/u/158373467?v=4" />
                <AvatarFallback>GM</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm sm:text-base font-semibold">Gustavo Monteiro</p>
                <span className="text-[12px] sm:text-sm text-gray-500">teste@gmail.com</span>
              </div>
            </article>

            <article className="flex items-center gap-2 border-b py-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://avatars.githubusercontent.com/u/158373467?v=4" />
                <AvatarFallback>GM</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm sm:text-base font-semibold">Monteiro Gustavo</p>
                <span className="text-[12px] sm:text-sm text-gray-500">teste@gmail.com</span>
              </div>
            </article>
          </CardContent>

        </Card>
    );
}