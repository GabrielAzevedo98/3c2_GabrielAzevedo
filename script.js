const calcular = document.getElementById('calcular');


function poupanca () {
    const nome = document.getElementById('nome').value;
    const P = document.getElementById('valor').value;
    const juros = document.getElementById('juros').value;
    const n = document.getElementById('parcelas').value;
    const  resultado = document.getElementById('resultado');

    if ( P  !== '' && juros !== '' && parcelas !== '' && nome !== '') {

        
        
        let i = (juros /100);
        const VF = ((P*(1+i)**n)/i).toFixed(2);
        
        

        resultado.textContent = `${nome}, se você aplicar R$${P}, à taxa de juros de ${juros}% ao mês, durante ${n} meses, acumulará uma poupança de R$${VF}`;

       
            
        
       
        

    }
    
    
}
calcular.addEventListener('click', poupanca)