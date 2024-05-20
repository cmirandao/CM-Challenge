'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">front-cmchallenge documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-2bb46130621ca0fcb744da5a6a9f4ad2e48e1c1d906b340c6741d793550d1a1210a93a6a39f6bf47bb19ce1d7ea7956bb5c56972f88558e8268b9612a5f46059"' : 'data-bs-target="#xs-injectables-links-module-AppModule-2bb46130621ca0fcb744da5a6a9f4ad2e48e1c1d906b340c6741d793550d1a1210a93a6a39f6bf47bb19ce1d7ea7956bb5c56972f88558e8268b9612a5f46059"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2bb46130621ca0fcb744da5a6a9f4ad2e48e1c1d906b340c6741d793550d1a1210a93a6a39f6bf47bb19ce1d7ea7956bb5c56972f88558e8268b9612a5f46059"' :
                                        'id="xs-injectables-links-module-AppModule-2bb46130621ca0fcb744da5a6a9f4ad2e48e1c1d906b340c6741d793550d1a1210a93a6a39f6bf47bb19ce1d7ea7956bb5c56972f88558e8268b9612a5f46059"' }>
                                        <li class="link">
                                            <a href="injectables/JobappService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobappService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomeModule-429d0d763bef754a85789bbb5b3fdd392c8d5aefd6e13be9ebd2c916fc6fb076fbffedf9a901490aa3c5f4cf313a04cf9282b4ccd34f09677d778f0eb29f28e1"' : 'data-bs-target="#xs-components-links-module-HomeModule-429d0d763bef754a85789bbb5b3fdd392c8d5aefd6e13be9ebd2c916fc6fb076fbffedf9a901490aa3c5f4cf313a04cf9282b4ccd34f09677d778f0eb29f28e1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-429d0d763bef754a85789bbb5b3fdd392c8d5aefd6e13be9ebd2c916fc6fb076fbffedf9a901490aa3c5f4cf313a04cf9282b4ccd34f09677d778f0eb29f28e1"' :
                                            'id="xs-components-links-module-HomeModule-429d0d763bef754a85789bbb5b3fdd392c8d5aefd6e13be9ebd2c916fc6fb076fbffedf9a901490aa3c5f4cf313a04cf9282b4ccd34f09677d778f0eb29f28e1"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NewjobModule.html" data-type="entity-link" >NewjobModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-NewjobModule-09ab0fd9b86c72b0d05edca125ab828a507a89c07a3108f96f22046cb61351b6dbb324044059f83f4f20848970448752dc74f77493a98839aaaa213b1ea54840"' : 'data-bs-target="#xs-components-links-module-NewjobModule-09ab0fd9b86c72b0d05edca125ab828a507a89c07a3108f96f22046cb61351b6dbb324044059f83f4f20848970448752dc74f77493a98839aaaa213b1ea54840"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NewjobModule-09ab0fd9b86c72b0d05edca125ab828a507a89c07a3108f96f22046cb61351b6dbb324044059f83f4f20848970448752dc74f77493a98839aaaa213b1ea54840"' :
                                            'id="xs-components-links-module-NewjobModule-09ab0fd9b86c72b0d05edca125ab828a507a89c07a3108f96f22046cb61351b6dbb324044059f83f4f20848970448752dc74f77493a98839aaaa213b1ea54840"' }>
                                            <li class="link">
                                                <a href="components/NewjobComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewjobComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewjobRoutingModule.html" data-type="entity-link" >NewjobRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NewpositionModule.html" data-type="entity-link" >NewpositionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-NewpositionModule-7677df90bc04a90924df7d1f5359a24517295659b8397fdb264802c211416725ae114fa9e0280c56ec1d34dae103b35094543f2268a8226bf1b73d1fecb61c66"' : 'data-bs-target="#xs-components-links-module-NewpositionModule-7677df90bc04a90924df7d1f5359a24517295659b8397fdb264802c211416725ae114fa9e0280c56ec1d34dae103b35094543f2268a8226bf1b73d1fecb61c66"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NewpositionModule-7677df90bc04a90924df7d1f5359a24517295659b8397fdb264802c211416725ae114fa9e0280c56ec1d34dae103b35094543f2268a8226bf1b73d1fecb61c66"' :
                                            'id="xs-components-links-module-NewpositionModule-7677df90bc04a90924df7d1f5359a24517295659b8397fdb264802c211416725ae114fa9e0280c56ec1d34dae103b35094543f2268a8226bf1b73d1fecb61c66"' }>
                                            <li class="link">
                                                <a href="components/NewpositionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewpositionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewpositionRoutingModule.html" data-type="entity-link" >NewpositionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JobappService.html" data-type="entity-link" >JobappService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Candidate.html" data-type="entity-link" >Candidate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Column.html" data-type="entity-link" >Column</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Jobapp.html" data-type="entity-link" >Jobapp</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Position.html" data-type="entity-link" >Position</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SaveApp.html" data-type="entity-link" >SaveApp</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Status.html" data-type="entity-link" >Status</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadEvent.html" data-type="entity-link" >UploadEvent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});