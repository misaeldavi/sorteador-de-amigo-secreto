import { useRef, useState } from "react"
import { useAdicionarParticipantes } from "../../state/hook/useAdicionarParticipante"
import { useMensagemDeErro } from "../../state/hook/useMensagemDeErro"

import './Formulario.css'

const Formulario = () => {

    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdicionarParticipantes()

    const mensagemDeErro = useMensagemDeErro()

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }

    return (<form onSubmit={adicionarParticipante}>
        <div className="grupo-input-btn">
            <input
                ref={inputRef}
                value={nome}
                onChange={evento => setNome(evento.target.value)}
                type="text"
                placeholder="Insira os nomes dos participantes"
            />
            <button disabled={!nome}>Adicionar</button>
        </div>
        {mensagemDeErro && <p className="alerta erro" role="alert">{mensagemDeErro}</p>}
    </form>)
}

export default Formulario