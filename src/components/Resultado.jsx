import '../css/resultado.css'
import '../css/global.css'

// TABELA IMC COM OS DADOS
const TABELA_IMC =[
    {id:"abaixo",limite:18.5,classificacao:"Abaixo do Peso",faixa:"abaixo de 18,5" },
    {id:"normal",limite:25,classificacao:"Peso Normal",faixa:"18,5 - 24,9" },
    {id:"sobrepeso",limite:30,classificacao:"Sobrepeso",faixa:"25 - 29,9" },
    {id:"grau1",limite:35,classificacao:"Obesidade Grau-I",faixa:"30 - 34,9" },
    {id:"grau2",limite:40,classificacao:"Obesidade Grau-II",faixa:"35 - 39,9" },
    {id:"grau3",limite:Infinity,classificacao:"Obesidade Grau-III",faixa:"Maior ou Igual a 40" },
];
// arrow function com destruct
const Resultado = ({resultado}) => {
  // função parsefloat, pega a variavel e converte para numero flutuante
  const valor =parseFloat(resultado);


  return (
    <section className="imc-conteiner">
      <table border="1" className='imc-table'>
        <thead>
          <tr>
            <th>Classificação</th>
            <th>IMC</th>
          </tr>

        </thead>
        <tbody>
         {TABELA_IMC.map((item,index)=>{
          const limiteAnterior = index > 0 ? TABELA_IMC[index -1].limite:0;
          const isAtivo = !isNaN(valor) && valor >= limiteAnterior && valor < item.limite;

          return(
            <tr key={item.id} className={isAtivo ? "destaque" : ""}>
              <td>{item.classificacao}</td>
              <td>{item.faixa}</td>
            </tr>
          )

         })}
        </tbody>

      </table>
      
    </section>
  )
}

export default Resultado
