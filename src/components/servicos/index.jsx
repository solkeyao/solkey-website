import './index.css';

export default function Servicos(){
    return (
        <section className='d-section servicos' id='servicos'>
            <h1 className='text-center'>Serviços</h1>
            <p className='text-center'>Temos diverssos serviços, que inlcuem os principais:</p>
            <ul className='ser_list'>
                <li className='ser_item'>
                    <div className='ser_item_content'>
                        <img width='48px' src="/assets/ser_desenvolvimento.png" alt="" />
                        <p>Desenvolvimento de website e aplicativos</p>
                    </div>
                </li>

                <li className='ser_item'>
                    <div className='ser_item_content'>
                        <img width='48px' src="/assets/ser_marketing.png" alt="" />
                        <p>Marketing e Vendas</p>
                    </div>
                </li>

                <li className='ser_item'>
                    <div className='ser_item_content'>
                        <img width='48px' src="/assets/ser_design.png" alt="" />
                        <p>Design Gráfico</p>
                    </div>
                </li>
            </ul>
        </section>
    );
}