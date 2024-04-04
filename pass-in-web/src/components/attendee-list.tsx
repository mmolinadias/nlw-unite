import { Search, MoreHorizontal } from "lucide-react"

export function AttendeeList() {
    return (
        <div className=" flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                    <Search className="size-4 text-emerald-300"/>
                    <input className="bg-transparent flex-1 outline-none" placeholder="Buscar participante..."/>
                </div>
            </div>
            <div className="border border-white/10 rounded-lg ">
                <table className="w-full  ">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="py-3 px-4 text-sm font-semibold text-left">
                                <input type="checkbox"/>
                            </th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Participante</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Data de Inscrição</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Data do check-in</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 8 }).map((_, i) => {
                            return (
                                <tr key={i} className="border-b border-white/10">
                                <td className="py-3 px-4 text-sm text-zinc-300">
                                    <input type="checkbox" />
                                </td>
                                <td className="py-3 px-4 text-sm text-zinc-300">42342</td>
                                <td className="py-3 px-4 text-sm text-zinc-300">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-white">Garou Ratinho Rodrigues</span>
                                        <span>ratoroedor@gmail.com</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-sm text-zinc-300">1 dia atrás</td>
                                <td className="py-3 px-4 text-sm text-zinc-300">1 dia atrás</td>
                                <td className="py-3 px-4 text-sm text-zinc-300">
                                    <button>
                                        <MoreHorizontal className="size-4" />
                                    </button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="py-3 px-2.5 text-sm text-zinc-300" colSpan={3}>
                                Mostrando 10 de 228 itens
                            </td>
                            <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                                Página 1 de 23
                            </td>

                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )

}
