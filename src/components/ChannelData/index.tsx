import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import ChannelMessage, {Mention} from "../ChannelMessage";

const ChannelData: React.FC = () => {
const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

useEffect(() =>{
  const div = messagesRef.current;

  if(div){
    div.scrollTop = div.scrollHeight;
  }
})

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />
        <ChannelMessage
        author="Breno Alves"
        date="25/01/2023"
        content="Hoje é meu aniversário"
        />

        <ChannelMessage
        author="MusicBot"
        date="25/01/2023"
        content={<><Mention>@Breno Alves</Mention>, está tocando uma música.</>} />

        </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
