import React, { Component } from 'react'
import $ from 'jquery';


class Grid extends Component {

    constructor(props) {
        super(props)
        this.state = {

            input1: '', input2: '', input3: '', input4: '6', input5: '8', input6: '', input7: '1', input8: '9', input9: '',
            input10: '8', input11: '2', input12: '', input13: '', input14: '4', input15: '', input16: '5', input17: '', input18: '',
            input19: '', input20: '', input21: '9', input22: '', input23: '4', input24: '', input25: '7', input26: '', input27: '3',
            input28: '2', input29: '6', input30: '', input31: '7', input32: '', input33: '', input34: '', input35: '', input36: '4',
            input37: '1', input38: '', input39: '', input40: '6', input41: '', input42: '2', input43: '', input44: '',
            input45: '3', input46: '3', input47: '', input48: '', input49: '', input50: '5', input51: '', input52: '', input53: '1',
            input54: '8', input55: '7', input56: '', input57: '1', input58: '', input59: '9', input60: '', input61: '5', input62: '',
            input63: '', input64: '', input65: '4', input66: '', input67: '9', input68: '', input69: '', input70: '', input71: '2',
            input72: '8', input73: '', input74: '7', input75: '4', input76: '', input77: '3', input78: '6', input79: '', input80: '', input81: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        const state = { 
            correct1: '', correct2: '', correct3: '', correct4: '', correct5: '', correct6: '', correct7: '', correct8: '', correct9: '',
            correct10: '', correct11: '', correct12: '', correct13: '', correct14: '', correct15: '', correct16: '', correct17: '', correct18: '',
            correct19: '', correct20: '', correct21: '', correct22: '', correct23: '', correct24: '', correct25: '', correct26: '', correct27: '',
            correct28: '', correct29: '', correct30: '', correct31: '', correct32: '', correct33: '', correct34: '', correct35: '', correct36: '',
            correct37: '', correct38: '', correct39: '', correct40: '', correct41: '', correct42: '', correct43: '', correct44: '',
            correct45: '', correct46: '', correct47: '', correct48: '', correct49: '', correct50: '', correct51: '', correct52: '', correct53: '',
            correct54: '', correct55: '', correct56: '', correct57: '', correct58: '', correct59: '', correct60: '', correct61: '', correct62: '',
            correct63: '', correct64: '', correct65: '', correct66: '', correct67: '', correct68: '', correct69: '', correct70: '', correct71: '',
            correct72: '', correct73: '', correct74: '', correct75: '', correct76: '', correct77: '', correct78: '', correct79: '', correct80: '', correct81: '' 
        },
            numArr = [
                '4', '3', '5', '6', '8', '2', '1', '9', '7', 
                '8', '2', '6', '3', '7', '4', '9', '5', '1',
                '5', '1', '9', '2', '3', '8', '7', '6', '3',
                '2', '6', '9', '5', '7', '1', '8', '3', '4',
                '1', '9', '5', '6', '8', '2', '7', '4', '3',
                '3', '2', '6', '9', '5', '7', '4', '1', '8',
                '7', '8', '1', '4', '9', '3', '5', '6', '2',
                '3', '4', '7', '9', '1', '5', '6', '2', '8',
                '8', '7', '4', '1', '3', '6', '2', '5', '9',
            ];

            let index = 0;
        Object.keys(state).forEach(k => {
            state[k] = numArr[index];
            index++;
        });
        this.setState(state);
    }

 

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const correct = target.getAttribute("data-correct");
        this.setState({
            [name]: value
        });

        if (value == correct) {
            console.log('yes');
            $(target).attr('disabled', true);
            $(target).css('color', "#fd9a03");
        } else {
            $(target).css('color', "#c96567");
        }
    }


    render() {
        // for (let i = 1; i < 9; i++) {
        //     const gridBlock = `<input name="input" value={this.state.input[i]} onChange={this.handleChange} className="grid__container--item" />` ;
        // }

        return (
            <div className="container">
                <div className="container__grid">
                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input1" data-correct={this.state.correct1} value={this.state.input1} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input2" data-correct={this.state.correct2} value={this.state.input2} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input3" data-correct={this.state.correct3} value={this.state.input3} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input4" disabled data-correct={this.state.correct4} value={this.state.input4} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input5" disabled data-correct={this.state.correct5} value={this.state.input5} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input6" data-correct={this.state.correct6} value={this.state.input6} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input7" disabled data-correct={this.state.correct7} value={this.state.input7} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input8" disabled data-correct={this.state.correct8} value={this.state.input8} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input9" data-correct={this.state.correct9} value={this.state.input9} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>

                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input10" disabled data-correct={this.state.correct10} value={this.state.input10} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input11" disabled data-correct={this.state.correct11} value={this.state.input11} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input12" data-correct={this.state.correct12} value={this.state.input12} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input13" data-correct={this.state.correct13} value={this.state.input13} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input14" disabled data-correct={this.state.correct14} value={this.state.input14} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input15" data-correct={this.state.correct15} value={this.state.input15} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input16" disabled data-correct={this.state.correct16} value={this.state.input16} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input17" data-correct={this.state.correct17} value={this.state.input17} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input18" data-correct={this.state.correct18} value={this.state.input18} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>

                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input19" data-correct={this.state.correct19} value={this.state.input19} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input20" data-correct={this.state.correct20} value={this.state.input20} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input21" disabled data-correct={this.state.correct21} value={this.state.input21} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input22" data-correct={this.state.correct22} value={this.state.input22} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input23" disabled data-correct={this.state.correct23} value={this.state.input23} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input24" data-correct={this.state.correct24} value={this.state.input24} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input25" disabled data-correct={this.state.correct25} value={this.state.input25} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input26" data-correct={this.state.correct26} value={this.state.input26} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input27" disabled data-correct={this.state.correct27} value={this.state.input27} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>
                </div>

                <div className="container__grid">
                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input28" disabled data-correct={this.state.correct28} value={this.state.input28} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input29" disabled data-correct={this.state.correct29} value={this.state.input29} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input30" data-correct={this.state.correct30} value={this.state.input30} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input31" disabled data-correct={this.state.correct31} value={this.state.input31} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input32" disabled data-correct={this.state.correct32} value={this.state.input32} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input33" data-correct={this.state.correct33} value={this.state.input33} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input34" data-correct={this.state.correct34} value={this.state.input34} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input35" data-correct={this.state.correct35} value={this.state.input35} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input36" disabled data-correct={this.state.correct36} value={this.state.input36} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>

                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input37" disabled data-correct={this.state.correct37} value={this.state.input37} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input38" disabled data-correct={this.state.correct38} value={this.state.input38} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input39" data-correct={this.state.correct39} value={this.state.input39} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input40" disabled data-correct={this.state.correct40} value={this.state.input40} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input41" data-correct={this.state.correct41} value={this.state.input41} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input42" disabled data-correct={this.state.correct42} value={this.state.input42} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input43" data-correct={this.state.correct43} value={this.state.input43} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input44" data-correct={this.state.correct44} value={this.state.input44} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input45" disabled data-correct={this.state.correct45} value={this.state.input45} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>

                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input46" disabled data-correct={this.state.correct46} value={this.state.input46} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input47" data-correct={this.state.correct47} value={this.state.input47} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input48" data-correct={this.state.correct48} value={this.state.input48} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input49" data-correct={this.state.correct49} value={this.state.input49} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input50" disabled data-correct={this.state.correct50} value={this.state.input50} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input51" data-correct={this.state.correct51} value={this.state.input51} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input52" data-correct={this.state.correct52} value={this.state.input52} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input53" disabled data-correct={this.state.correct53} value={this.state.input53} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input54" disabled data-correct={this.state.correct54} value={this.state.input54} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>
                </div>

                <div className="container__grid">
                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input55" disabled data-correct={this.state.correct55} value={this.state.input55} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input56" data-correct={this.state.correct56} value={this.state.input56} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input57" disabled data-correct={this.state.correct57} value={this.state.input57} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input58" data-correct={this.state.correct58} value={this.state.input58} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input59" disabled data-correct={this.state.correct59} value={this.state.input59} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input60" data-correct={this.state.correct60} value={this.state.input60} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input61" disabled data-correct={this.state.correct61} value={this.state.input61} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input62" data-correct={this.state.correct62} value={this.state.input62} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input63" data-correct={this.state.correct63} value={this.state.input63} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>

                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input64" data-correct={this.state.correct64} value={this.state.input64} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input65" disabled data-correct={this.state.correct65} value={this.state.input65} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input66" data-correct={this.state.correct66} value={this.state.input66} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input67" disabled data-correct={this.state.correct67} value={this.state.input67} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input68" data-correct={this.state.correct68} value={this.state.input68} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input69" data-correct={this.state.correct69} value={this.state.input69} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input70" data-correct={this.state.correct70} value={this.state.input70} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input71" disabled data-correct={this.state.correct71} value={this.state.input71} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input72" disabled data-correct={this.state.correct72} value={this.state.input72} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>

                    <div className="content">
                        <form className="grid">
                            <label className="grid__container">
                                <input name="input73" data-correct={this.state.correct73} value={this.state.input73} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input74" disabled data-correct={this.state.correct74} value={this.state.input74} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input75" disabled data-correct={this.state.correct75} value={this.state.input75} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input76" data-correct={this.state.correct76} value={this.state.input76} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input77" disabled data-correct={this.state.correct77} value={this.state.input77} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input78" disabled data-correct={this.state.correct78} value={this.state.input78} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input79" data-correct={this.state.correct79} value={this.state.input79} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input80" data-correct={this.state.correct80} value={this.state.input80} onChange={this.handleChange} className="grid__container--item" />
                                <input name="input81" data-correct={this.state.correct81} value={this.state.input81} onChange={this.handleChange} className="grid__container--item" />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Grid;


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