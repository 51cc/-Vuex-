
import * as types from './mutation_types'
import commn from '../common/common'

export const state = {
  First:{}
}

export const getters = {

  firstGet(state){

    console.log('state'+state.First);

    return state.First;
  }
}

export const actions = {

  getFirst: ({commit}) => {


    let data = commn.post('diyinit?CODE=DIY20180410115756440349');

    commit(types.First,data)

  }

}

export const mutations = {

  [types.First](state,data){

    data.then(function (res) {

      state.First = res

    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
