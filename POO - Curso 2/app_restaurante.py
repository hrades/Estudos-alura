from modelos.mod_restaurante import Restaurante

rest1 = Restaurante('sushimakeria', 'japonesa')

rest1.mudar_status()

rest1.recebe_avaliacao('eu', 5)
rest1.recebe_avaliacao('eu', 3)
rest1.recebe_avaliacao('eu', 4)
rest1.recebe_avaliacao('eu', 3)
rest1.recebe_avaliacao('eu', 5)


def main():
    
    Restaurante.listar()
    


if __name__ == '__main__':
    main()