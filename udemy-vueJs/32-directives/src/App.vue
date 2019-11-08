<template>
    <div class="container mt-5">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6" v-if="!submitted">
                    <h1>Building Directives</h1>
                    <p v-text="'Some texts'"></p>
                    <p v-html="'<b>Some texts</b>'"></p>
                    <hr />
                    <h1>Custom Directives</h1>
                    <div class="alert" v-highlight:background="'#1dd1a1'">
                        This is a primary alert—check it out!
                    </div>
                    <div class="alert" v-highlight:background.delayed="'#5f27cd'">
                        This is a primary alert—check it out!
                    </div>
                    <div class="alert" v-highlight="'#ee5253'">
                        This is a primary alert—check it out!
                    </div>
                    <div class="alert" v-highlight:background="'#f368e0'">
                        This is a primary alert—check it out!
                    </div>
                    <div class="alert" v-local-highlight:background="'#222f3e'">
                        This is a primary alert—check it out!
                    </div>
                    <div class="alert" v-local-highlight:background.blink="'#ff6b6b'">
                        This is a primary alert—check it out!
                    </div>

                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        directives:{
            'local-highlight':{
                bind(el, binding, vnode){
                    if(binding.modifiers['blink']){
                     el.style.color = '#ffffff';
                     let mainColor = binding.value;
                     let secondColor = '#feca57';
                     let currentColor = mainColor;
                     setInterval(() =>{
                         if(currentColor == secondColor){
                             currentColor = mainColor;
                         }else if(currentColor == mainColor){
                             currentColor = secondColor;
                         }
                         el.style.color = '#ffffff';
                         el.style.backgroundColor = currentColor;
                     }, 1000);
                    } else {
                        el.style.color = '#1dd1a1';
                        el.style.backgroundColor = binding.value;
                    }
                }
            }
        }
    }
</script>

<style>
</style>
