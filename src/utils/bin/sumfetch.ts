import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@          DONATE 
         @|  @@@@@@@@@@@@@@@@   @@           <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
         @|                      @@          <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

`;
} else {
  return `
         ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  THE_VIRUS
      ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
    ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
  ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            A collection of 999 mutated subjects of an unknown virus
 ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.social.twitter}" target="_blank">twitter</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓     爵 <u><a href="${config.repo}" target="_blank">sneak peek</a></u>
▐▓                                 ▐▓       -----------
▐▓        > T H E V I R U S        ▐▓      CONTACT 
▐▓                                 ▐▓      <u><a href="${config.social.wallet}" target="_blank">etherscan wallet address</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓      <u><a href="${config.social.opensea}" target="_blank">opensea</a></u>
 ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="${config.social.blur}" target="_blank">blur</a></u>
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
    ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             CIPHER 
      ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                Hidden within this website is the first step to an Easter Egg hunt
          ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

`;
}
};

export default sumfetch;
