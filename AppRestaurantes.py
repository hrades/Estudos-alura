import os

#GLOBAIS

restaurantes = []
opcao = str()

#FUNÇÕES

def menu():
    print('''Escolha uma opção:
    1. Cadastrar
    2. Listar
    3. Ativar/Desativar
    4. Sair''')
    
def acao_escolhida(): 
    
    while True:
        opcao = input('Digite sua escolha: ')
        if opcao == '1' or opcao == '2' or opcao == '3' or opcao == '4':
            opcao = int(opcao)
            break
        else:
            titulo('Valor inválido! Escolha novamente')
            menu()
            
    if opcao == 1:
        cadastro()
    elif opcao == 2:
        listar()
    elif opcao == 3:
        alternar_estado()
    elif opcao == 4:
        encerrar()

def tela_de_inicio():
    os.system('cls')
    print('App Restaurantes\n')
    menu()
    acao_escolhida()
    
def titulo(escolha=str):
    os.system('cls')
    print(f'{escolha}\n')

def voltar_inicio():
    input('\nDigite qualquer tecla para voltar ')
    tela_de_inicio()

def cadastro():
    titulo('CADASTRO DE RESTAURANTES')
    continuar = 0
    while continuar != 1:
        nome = input('\nDigite o nome do restaurante a ser cadastrado: ')
        categoria = input('\nDigite o tipo de restaurante (com base na comida servida): ')
        dados_restaurante = {'nome':nome, 'categoria':categoria, 'ativo':False}
        restaurantes.append(dados_restaurante)
        
        try:
            continuar = int(input('\nDigite 1 para encerrar cadastros ou qualquer outra tecla para continuar: '))
        except:
            print('\nVocê escolheu continuar')
    
    print(f'Cadastros realizados com sucesso')
    voltar_inicio()
    
def listar():
    titulo('LISTA DE RESTAURANTES')
    for restaurante in restaurantes:
        indice = restaurantes.index(restaurante)+1
        nome = restaurante['nome']
        tipo = restaurante['categoria']
        ativado = restaurante['ativo']
        estado = ''
        if ativado:
            estado = 'ativado'
        else:
            estado = 'desativado'
        print(f'{indice}. {nome} - {tipo}. Este restaurante está {estado} no app')
    voltar_inicio()
    
def alternar_estado():
    titulo('Ativar ou desativar restaurantes no app')
    res = input('Digite o nome do restaurante: ')
    encontrado = False
    
    for restaurante in restaurantes:
        if restaurante['nome'] == res:
            encontrado = True
            print('\nO restaurante está na lista')
        else:
            print('\nO restaurante não se encontra na lista')
        
        if encontrado == True:
            estado = ''
            not_estado = ''
            if restaurante['ativo'] == True:
                estado = 'ativado'
                not_estado = 'desativado'
            else:
                estado = 'desativado'
                not_estado = 'ativado'
            try:
                mudar = int(input(f'\nO restaurante está {estado} no app. Deseja alterar sua configuração? (1)SIM (0)NÃO: '))
                if mudar == 1:
                    restaurante['ativo'] = not restaurante['ativo']
                    print(f'Valor alterado com sucesso para {not_estado}')
                elif mudar == 0:
                    print(f'\nValor não alterado. O restaurante continua {estado}')
            except:
                print('\nFalha de entrada. Digite um valor válido')
                
    voltar_inicio()
    
def encerrar():
    titulo('Logout realizado com sucesso')
    
if __name__ == '__main__':
    tela_de_inicio()