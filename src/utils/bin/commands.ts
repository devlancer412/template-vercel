// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `TYPE 'HELP' TO DIVE DEEPER:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'virus' to display summary.
`;
};

// // Redirection
// export const repo = async (args: string[]): Promise<string> => {
//   window.open(`${config.repo}`);
//   return 'Opening Github repository...';
// };

// About
export const about = async (args: string[]): Promise<string> => {
  return ` ${config.name}. 
  The test subjects are showing abnormal changes!
  They must be STOPPED:
  Collection Size: 999
  Mint Price: 0.001
  Mint Date: TBA - May 2023
  
  'sumfetch' - find out more on how to survive the ourbreak.`;
  };

  //MINT
export const mint = async (args: string[]): Promise<string> => {
  window.open(`${config.social.opensea}`);
  return 'redirecting to mint page (...coming soon...)';
};
//VIRUS
export const virus = async (args: string[]): Promise<string> => {
  return ` ${config.name}. 
The test subjects are showing abnormal changes!
They must be STOPPED:
Collection Size: 999
Mint Price: 0.001
Mint Date: TBA - May 2023

'sumfetch' - find out more on how to survive the ourbreak.`;
};

export const sneakpeek = async (args: string[]): Promise<string> => {
  window.open(`${config.social.resume}`);
  return 'redirecting to twitter';
};

// Donate
export const team = async (args: string[]): Promise<string> => {
  return `3 Scientists are responsible for this outbreak. 
An3mbo
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>

Uncle3d
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>

4c1d1m4g1n4t1v3
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// // Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest. 
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// // Contact
// export const email = async (args: string[]): Promise<string> => {
//   window.open(`mailto:${config.email}`);
//   return `Opening mailto:${config.email}...`;
// };

// export const github = async (args: string[]): Promise<string> => {
//   window.open(`https://github.com/${config.social.github}/`);

//   return 'Opening github...';
// };

// export const linkedin = async (args: string[]): Promise<string> => {
//   window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

//   return 'Opening linkedin...';
// };

// // Search
// export const google = async (args: string[]): Promise<string> => {
//   window.open(`https://google.com/search?q=${args.join(' ')}`);
//   return `Searching google for ${args.join(' ')}...`;
// };

// export const duckduckgo = async (args: string[]): Promise<string> => {
//   window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
//   return `Searching duckduckgo for ${args.join(' ')}...`;
// };

// export const bing = async (args: string[]): Promise<string> => {
//   window.open(`https://bing.com/search?q=${args.join(' ')}`);
//   return `Wow, really? You are using bing for ${args.join(' ')}?`;
// };

// export const reddit = async (args: string[]): Promise<string> => {
//   window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
//   return `Searching reddit for ${args.join(' ')}...`;
// };

// // Typical linux commands
// export const echo = async (args: string[]): Promise<string> => {
//   return args.join(' ');
// };

// export const whoami = async (args: string[]): Promise<string> => {
//   return `${config.ps1_username}`;
// };

// export const ls = async (args: string[]): Promise<string> => {
//   return `a
// bunch
// of
// fake
// directories`;
// };

// export const cd = async (args: string[]): Promise<string> => {
//   return `unfortunately, i cannot afford more directories.
// if you want to help, you can type 'donate'.`;
// };

// export const date = async (args: string[]): Promise<string> => {
//   return new Date().toString();
// };

// export const vi = async (args: string[]): Promise<string> => {
//   return `woah, you still use 'vi'? just try 'vim'.`;
// };

// export const vim = async (args: string[]): Promise<string> => {
//   return `'vim' is so outdated. how about 'nvim'?`;
// };

// export const nvim = async (args: string[]): Promise<string> => {
//   return `'nvim'? too fancy. why not 'emacs'?`;
// };

// export const emacs = async (args?: string[]): Promise<string> => {
//   return `you know what? just use vscode.`;
// };

// export const sudo = async (args?: string[]): Promise<string> => {
//   window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
//   return `Permission denied: with little power comes... no responsibility? `;
// };

// Banner
export const banner = (args?: string[]): string => {
  return `

  ▄▄▄█████▓ ██░ ██ ▓█████     ██▒   █▓ ██▓ ██▀███   █    ██   ██████ 
  ▓  ██▒ ▓▒▓██░ ██▒▓█   ▀    ▓██░   █▒▓██▒▓██ ▒ ██▒ ██  ▓██▒▒██    ▒ 
  ▒ ▓██░ ▒░▒██▀▀██░▒███       ▓██  █▒░▒██▒▓██ ░▄█ ▒▓██  ▒██░░ ▓██▄   
  ░ ▓██▓ ░ ░▓█ ░██ ▒▓█  ▄      ▒██ █░░░██░▒██▀▀█▄  ▓▓█  ░██░  ▒   ██▒
    ▒██▒ ░ ░▓█▒░██▓░▒████▒      ▒▀█░  ░██░░██▓ ▒██▒▒▒█████▓ ▒██████▒▒
    ▒ ░░    ▒ ░░▒░▒░░ ▒░ ░      ░ ▐░  ░▓  ░ ▒▓ ░▒▓░░▒▓▒ ▒ ▒ ▒ ▒▓▒ ▒ ░
      ░     ▒ ░▒░ ░ ░ ░  ░      ░ ░░   ▒ ░  ░▒ ░ ▒░░░▒░ ░ ░ ░ ░▒  ░ ░
    ░       ░  ░░ ░   ░           ░░   ▒ ░  ░░   ░  ░░░ ░ ░ ░  ░  ░  
            ░  ░  ░   ░  ░         ░   ░     ░        ░           ░  
                                  ░                                  


Type 'help' to see the list of available commands.
Type 'sumfetch' to display crucial survial information.
Type 'mint' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.social.opensea}" target="_blank">here</a></u> for the mint page.(coming soon...)
`;
};
