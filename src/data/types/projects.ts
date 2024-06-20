export interface Project {
  id: string;
  name: string;
  targets: Targets;
}

interface Targets {
  production: Production;
}

interface Production {
  alias: [];
}
