import React, { Component } from 'react'


class Hey extends Component {

    constructor(props) {
        super(props)
        this.state = {
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        const state = { input1: '', input2: '', input3: '', input4: '', input5: '', input6: '', input7: '', input8: '', input9: '', },
            numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        Object.keys(state).forEach(k => {
            let index = Math.floor(Math.random() * numArr.length);
            state[k] = numArr[index];
            numArr.splice(index, 1);
        });
        this.setState(state);
    }



    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    render() {
        // for (let i = 1; i < 9; i++) {
        //     conHeyBlock = `<input name="input" value={this.state.input[i]} onChange={this.handleChange} classNamHey__container--item" />` ;
        // }

        return (
            <div className="container">
                <div className="containeHey">
                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input1" value={this.state.input1} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input2" value={this.state.input2} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input3" value={this.state.input3} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input4" value={this.state.input4} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input5" value={this.state.input5} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input6" value={this.state.input6} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input7" value={this.state.input7} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input8" value={this.state.input8} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input9" value={this.state.input9} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>

                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input10" value={this.state.input10} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input11" value={this.state.input11} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input12" value={this.state.input12} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input13" value={this.state.input13} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input14" value={this.state.input14} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input15" value={this.state.input15} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input16" value={this.state.input16} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input17" value={this.state.input17} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input18" value={this.state.input18} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>

                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input19" value={this.state.input19} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input20" value={this.state.input20} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input21" value={this.state.input21} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input22" value={this.state.input22} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input23" value={this.state.input23} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input24" value={this.state.input24} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input25" value={this.state.input25} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input26" value={this.state.input26} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input27" value={this.state.input27} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>
                </div>

                <div className="container__grid">
                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input28" value={this.state.input28} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input29" value={this.state.input29} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input30" value={this.state.input30} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input31" value={this.state.input31} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input32" value={this.state.input32} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input33" value={this.state.input33} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input34" value={this.state.input34} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input35" value={this.state.input35} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input36" value={this.state.input36} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>

                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input37" value={this.state.input38} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input38" value={this.state.input38} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input39" value={this.state.input39} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input40" value={this.state.input40} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input41" value={this.state.input41} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input42" value={this.state.input42} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input43" value={this.state.input43} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input44" value={this.state.input44} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input45" value={this.state.input45} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>

                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input46" value={this.state.input46} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input47" value={this.state.input47} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input48" value={this.state.input48} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input49" value={this.state.input49} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input50" value={this.state.input50} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input51" value={this.state.input51} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input52" value={this.state.input52} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input53" value={this.state.input53} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input54" value={this.state.input54} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>
                </div>

                <div className="container__grid">
                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input55" value={this.state.input55} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input52" value={this.state.input52} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input53" value={this.state.input53} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input54" value={this.state.input54} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input55" value={this.state.input55} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input56" value={this.state.input56} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input57" value={this.state.input57} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input58" value={this.state.input58} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input59" value={this.state.input59} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>

                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input60" value={this.state.input60} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input61" value={this.state.input61} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input62" value={this.state.input62} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input63" value={this.state.input63} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input64" value={this.state.input64} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input65" value={this.state.input65} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input66" value={this.state.input66} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input67" value={this.state.input67} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input68" value={this.state.input68} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>

                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input69" value={this.state.input69} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input70" value={this.state.input70} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input71" value={this.state.input71} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input72" value={this.state.input72} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input73" value={this.state.input73} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input74" value={this.state.input74} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input75" value={this.state.input75} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input76" value={this.state.input76} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input77" value={this.state.input77} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hey;


// return (
//     <div className="content">
//         <form className="grid">
//             <label className="grid__container">
//                 <input name="input1" value={this.state.input1} onChange={this.handleChange} className="grid__container--item" />
//                 <input name="input2" value={this.state.input2} onChange={this.handleChange} className="grid__container--item" />
//                 <input name="input3" value={this.state.input3} onChange={this.handleChange} className="grid__container--item" />
//                 <input name="input4" value={this.state.input4} onChange={this.handleChange} className="grid__container--item" />
//                 <input name="input5" value={this.state.input5} onChange={this.handleChange} className="grid__container--item" />
//                 <input name="input6" value={this.state.input6} onChange={this.handleChange} className="grid__container--item" />
//                 <input name="input7" value={this.state.input7} onChange={this.handleChange} className="grid__container--item" />
//                 <input name="input8" value={this.state.input8} onChange={this.handleChange} className="grid__container--item" />
//                 <input name="input9" value={this.state.input9} onChange={this.handleChange} className="grid__container--item" />
//             </label>
//         </form>
//     </div>
// );