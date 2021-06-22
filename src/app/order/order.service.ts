import {Injectable} from '@angular/core'

import {Http, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service' //import do serviço cartservice.
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order, OrderItem} from './order.model'

import {MEAT_API} from '../app.api'

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: Http){}

  itemsValue(): number {
    return this.cartService.total()
  }

  cartItems(): CartItem[]{
    return this.cartService.items   // Captura os itens do array do serviço cartService/ShoppingCartService
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.cartService.removeItem(item)
  }

  clear(){
    this.cartService.clear()
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers()
                //passando o nome do header e valor/(formato que se quer enviar) do mesmo.
    headers.append('Content-Type', 'application/json')
                          //para onde mandar  , oque será enviado    ,definição de tipo de conteúdo
    return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({headers: headers}))
                      //mapeando a resposta de retorno gerando json
                    .map(response=> response.json())
                    .map(order => order.id)  //mapeaano o resposta e estraindo o id do json retornado do servidor.
  }

}
