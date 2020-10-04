import React from 'react';
import {View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

import {
    Container,
    Footer,
    Body,
    SideContainer,
    ObjetoHead,
    TitlePrimary,
    TitleLabel,
    SuccessButton,
    DangerButton,
    PrimaryButton,
    ButtonText,
    Lista,
    ListaItem,
    Topico,
    Descricao,
    LineVertical,
    PerdidoNav,
    PerdidoNavBtn
} from './styles';

function Match (){
    return (
        <Container>
            <PageHeader title="Match" />
            <Body>
                <SideContainer>
                    <ObjetoHead>
                        <TitlePrimary>
                            Achado
                        </TitlePrimary>
                    </ObjetoHead>
                    
                    <Lista>
                        <ListaItem>
                            <Topico>Data: </Topico>
                            <Descricao>30/07/2020</Descricao>
                        </ListaItem>
                        <ListaItem>
                            <Topico>Categoria: </Topico>
                            <Descricao>
                                Capacete de motocicleta
                            </Descricao>
                        </ListaItem>
                        <ListaItem>
                            <Topico>Descrição: </Topico>
                            <Descricao>
                                Branco, viseira transparente, adesivo unicornio, 
                                modelo esportivo, marca IBF
                            </Descricao>
                        </ListaItem>
                        <ListaItem>
                            <Topico>Localização: </Topico>
                            <Descricao>
                                Encontrado no RU da UFC
                            </Descricao>
                        </ListaItem>
                        <ListaItem>
                            <Topico>Status: </Topico>
                            <Descricao>
                                Match
                            </Descricao>
                        </ListaItem>
                    </Lista>

                </SideContainer>

                <LineVertical></LineVertical>
                
                <SideContainer>
                    <ObjetoHead>
                        <TitlePrimary>
                            Perdido
                        </TitlePrimary>
                        <TitleLabel>
                            (3 Opções encontradas)
                        </TitleLabel>
                    </ObjetoHead>
                    <Lista>
                        <ListaItem>
                            <Topico>Data: </Topico>
                            <Descricao>30/07/2020</Descricao>
                        </ListaItem>
                        <ListaItem>
                            <Topico>Categoria: </Topico>
                            <Descricao>
                                Capacete de motocicleta
                            </Descricao>
                        </ListaItem>
                        <ListaItem>
                            <Topico>Descrição: </Topico>
                            <Descricao>
                                Branco, viseira transparente, adesivo unicornio, 
                                modelo esportivo, marca IBF
                            </Descricao>
                        </ListaItem>
                        <ListaItem>
                            <Topico>Localização: </Topico>
                            <Descricao>
                                Encontrado no RU da UFC
                            </Descricao>
                        </ListaItem>
                        <ListaItem>
                            <Topico>Status: </Topico>
                            <Descricao>
                                Match
                            </Descricao>
                        </ListaItem>
                    </Lista>
                    <PerdidoNav>
                        <PerdidoNavBtn>
                            <ButtonText> prev </ButtonText> 
                        </PerdidoNavBtn>

                        <PerdidoNavBtn>
                            <ButtonText> prox </ButtonText> 
                        </PerdidoNavBtn>
                    </PerdidoNav>
                </SideContainer>
            </Body>
            <Footer>
                <SuccessButton>
                    <ButtonText>Confirmar</ButtonText>
                </SuccessButton>

                <PrimaryButton>
                    <ButtonText>Mensagem</ButtonText>
                </PrimaryButton>

                <DangerButton>
                    <ButtonText>Recusar</ButtonText>
                </DangerButton>
            </Footer>
        </Container>
    );
}

export default Match;