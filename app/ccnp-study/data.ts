export type QAEntry = {
  id: string;
  keywords: string[];
  question: string;
  answer: string;
};

export type Category = {
  id: string;
  title: string;
  blueprint: string;
  weight: string;
  description: string;
  entries: QAEntry[];
};

export const categories: Category[] = [
  {
    id: "architecture",
    title: "Network Architecture",
    blueprint: "ENCOR 350-401 · Domain 1",
    weight: "15%",
    description:
      "Enterprise network design, Cisco SD-Access, SD-WAN, QoS, and wireless architecture.",
    entries: [
      {
        id: "arch-1",
        keywords: ["sd-access", "sda", "software-defined access", "fabric"],
        question: "What is Cisco SD-Access (SDA)?",
        answer:
          "Cisco SD-Access is Cisco's software-defined enterprise network architecture. It separates the network into an underlay (physical connectivity, usually built with IS-IS) and an overlay (a VXLAN fabric that carries user traffic). It uses LISP for control-plane host tracking, VXLAN for data-plane encapsulation, and Cisco TrustSec (SGTs) for policy enforcement — all orchestrated centrally by Cisco DNA Center.",
      },
      {
        id: "arch-2",
        keywords: ["three-tier", "three tier", "two-tier", "collapsed core", "core distribution access"],
        question: "What's the difference between a three-tier and two-tier (collapsed core) design?",
        answer:
          "A three-tier design has separate Core, Distribution, and Access layers — used in large campuses where scale and hierarchical policy enforcement matter. A two-tier / collapsed-core design merges the core and distribution functions into one layer, connecting directly to access switches. It's common in smaller campuses since it reduces cost and hop count while still keeping Layer 2 domains contained at the access edge.",
      },
      {
        id: "arch-3",
        keywords: ["sd-wan", "sdwan", "viptela"],
        question: "What is Cisco SD-WAN and what are its components?",
        answer:
          "Cisco SD-WAN (built on Viptela technology) abstracts WAN transport (MPLS, broadband, LTE) and centrally manages policy, routing, and security. Its core components are: vManage (centralized management/GUI), vSmart (control plane, distributes policy via OMP), vBond (orchestrator, handles initial authentication and NAT traversal), and vEdge/cEdge routers (data plane devices at each site).",
      },
      {
        id: "arch-4",
        keywords: ["qos", "quality of service", "diffserv", "dscp", "cos", "marking"],
        question: "How does QoS marking and queuing work?",
        answer:
          "QoS classifies and marks traffic as close to the source as possible (DSCP in Layer 3, CoS in Layer 2 802.1Q). DiffServ uses per-hop behaviors: EF (Expedited Forwarding) for voice, AF (Assured Forwarding) classes for data with drop precedence, and BE (Best Effort, DSCP 0) as default. Devices then use queuing (e.g., LLQ for voice, CBWFQ for data classes) and congestion avoidance (WRED) based on those markings.",
      },
      {
        id: "arch-5",
        keywords: ["wireless architecture", "autonomous", "lightweight ap", "capwap", "wlc"],
        question: "What's the difference between autonomous and lightweight wireless architecture?",
        answer:
          "Autonomous APs operate independently, each with its own full configuration. Lightweight APs (LWAPs) instead tunnel control and data traffic to a central Wireless LAN Controller (WLC) using CAPWAP. The WLC handles RF management, mobility, and centralized configuration, which scales far better for enterprise deployments than managing each AP individually.",
      },
      {
        id: "arch-6",
        keywords: ["cisco dna center", "dnac", "intent-based networking", "ibn"],
        question: "What is Cisco DNA Center and Intent-Based Networking?",
        answer:
          "Cisco DNA Center is the centralized management and automation platform for SD-Access and the broader enterprise network. Intent-Based Networking (IBN) means you express a business intent (e.g., 'this VLAN should have this security policy') and the controller translates it into device configuration, then continuously monitors (via Assurance) that the network's actual state matches that intent.",
      },
    ],
  },
  {
    id: "virtualization",
    title: "Virtualization",
    blueprint: "ENCOR 350-401 · Domain 2",
    weight: "10%",
    description: "Device, network, and data-path virtualization technologies.",
    entries: [
      {
        id: "virt-1",
        keywords: ["vrf", "vrf-lite", "virtual routing and forwarding"],
        question: "What is a VRF and what is VRF-Lite?",
        answer:
          "A VRF (Virtual Routing and Forwarding instance) creates multiple isolated routing tables on a single device, so overlapping IP address spaces from different customers or departments can coexist. VRF-Lite is VRF without MPLS — routes are kept separate per VRF but exchanged using standard routing protocols (each VRF typically needs its own protocol instance/process) across directly connected links, with no BGP/MPLS label distribution required.",
      },
      {
        id: "virt-2",
        keywords: ["vss", "virtual switching system", "stackwise"],
        question: "What is VSS vs. StackWise?",
        answer:
          "Virtual Switching System (VSS) combines two Catalyst 6800/6500-class chassis into one logical switch connected via a Virtual Switch Link (VSL), giving a single control plane and enabling MEC (Multichassis EtherChannel) to downstream devices. StackWise is the equivalent technology for fixed-configuration switches (e.g., Catalyst 9300) using a dedicated stacking cable/ring to join multiple physical switches into one logical switch with one management and control plane.",
      },
      {
        id: "virt-3",
        keywords: ["vrf vs vlan", "network virtualization"],
        question: "How does network virtualization differ from device virtualization?",
        answer:
          "Device virtualization creates multiple logical devices from one physical device (e.g., VRFs for routing tables) or one logical device from multiple physical devices (e.g., VSS/StackWise). Network virtualization instead segments an entire physical network into independent logical topologies (e.g., VLANs at Layer 2, VRFs/VXLAN overlays at Layer 3) that share the same physical infrastructure while remaining isolated from each other.",
      },
      {
        id: "virt-4",
        keywords: ["data path virtualization", "gre", "vxlan tunnel", "ipsec tunnel"],
        question: "What is data-path virtualization?",
        answer:
          "Data-path virtualization creates virtual data paths over a shared physical network using tunneling — for example GRE, IPsec, or VXLAN. These technologies encapsulate traffic so it can traverse an underlay network transparently, which is exactly how the VXLAN overlay works in an SD-Access fabric.",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    blueprint: "ENCOR 350-401 · Domain 3",
    weight: "30%",
    description:
      "Layer 2 (VLANs, STP, EtherChannel), Layer 3 routing (OSPF, EIGRP, BGP), and wireless infrastructure — the largest exam domain.",
    entries: [
      {
        id: "infra-1",
        keywords: ["stp", "spanning tree", "rstp", "mst", "root bridge", "port states"],
        question: "How does Spanning Tree Protocol (STP) work?",
        answer:
          "STP (802.1D) prevents Layer 2 loops by electing a root bridge (lowest bridge ID) and blocking redundant paths. Ports move through states: Blocking → Listening → Learning → Forwarding (with Disabled as an admin-down state). Rapid PVST+ (802.1w) speeds convergence using proposal/agreement handshakes and port roles (Root, Designated, Alternate, Backup). MST (802.1s) maps multiple VLANs to a smaller number of spanning-tree instances for scalability.",
      },
      {
        id: "infra-2",
        keywords: ["etherchannel", "port-channel", "lacp", "pagp"],
        question: "What is EtherChannel and how do LACP and PAgP differ?",
        answer:
          "EtherChannel bundles multiple physical links into one logical link for higher bandwidth and redundancy, load-balanced by a hash of MAC/IP/port fields. LACP (802.3ad, IEEE standard) negotiates bundles using active/passive modes. PAgP is Cisco-proprietary and uses desirable/auto modes. Both prevent a mismatched bundle from forming; static 'on' mode bypasses negotiation entirely and should be avoided in production.",
      },
      {
        id: "infra-3",
        keywords: ["ospf", "open shortest path first", "lsa", "dr bdr", "area"],
        question: "What are the key concepts of OSPF?",
        answer:
          "OSPF is a link-state IGP that builds a full topology database via LSAs (Link-State Advertisements) and runs Dijkstra's SPF algorithm to compute the best path, using cost (based on bandwidth) as its metric. Routers in the same area synchronize identical link-state databases. On multi-access segments, a DR/BDR is elected to reduce LSA flooding. OSPF supports areas (Area 0 is the backbone; all other areas must connect to it) to control LSA scope and improve scalability, with special area types like stub, totally stubby, and NSSA.",
      },
      {
        id: "infra-4",
        keywords: ["eigrp", "enhanced interior gateway", "feasible successor", "successor", "das"],
        question: "How does EIGRP compute routes?",
        answer:
          "EIGRP is an advanced distance-vector protocol using DUAL (Diffusing Update Algorithm). It tracks a Successor (best loop-free path) and optionally a Feasible Successor (backup path guaranteed loop-free, used instantly without recomputation) for each destination. Its composite metric factors bandwidth and delay by default (with load and reliability configurable). Neighbors exchange only partial, incremental updates rather than full periodic broadcasts.",
      },
      {
        id: "infra-5",
        keywords: ["bgp", "border gateway protocol", "ibgp", "ebgp", "as path", "path attributes"],
        question: "What are the fundamentals of BGP?",
        answer:
          "BGP is a path-vector protocol used mainly for inter-AS routing. eBGP peers with a different AS (typically directly connected); iBGP peers within the same AS (typically requires a full mesh or route reflectors, since iBGP routes aren't re-advertised to other iBGP peers by default). Best-path selection walks a well-defined attribute order: Weight → Local Preference → locally originated → shortest AS-Path → lowest origin type → lowest MED → eBGP over iBGP → lowest IGP metric to next hop → oldest route → lowest router ID.",
      },
      {
        id: "infra-6",
        keywords: ["vlan", "trunk", "802.1q", "native vlan", "access port"],
        question: "How do VLANs and trunking work?",
        answer:
          "A VLAN creates a separate broadcast domain at Layer 2 on shared switching infrastructure. Access ports carry traffic for a single VLAN (untagged). Trunk ports carry multiple VLANs, tagging frames with 802.1Q headers so the receiving switch knows which VLAN each frame belongs to. One VLAN per trunk can be the native VLAN, sent untagged — a common misconfiguration and VLAN-hopping risk if it's left as VLAN 1 or mismatched between switches.",
      },
      {
        id: "infra-7",
        keywords: ["hsrp", "vrrp", "glbp", "first hop redundancy", "fhrp"],
        question: "What are FHRPs (HSRP, VRRP, GLBP) and how do they differ?",
        answer:
          "First Hop Redundancy Protocols provide a virtual default gateway shared across multiple routers. HSRP (Cisco-proprietary) elects one Active and one Standby router for a virtual IP/MAC. VRRP is the open-standard equivalent, using a Master/Backup model. GLBP (Cisco-proprietary) goes further by load-balancing across up to 4 routers simultaneously using a single virtual IP but multiple virtual MACs handed out round-robin.",
      },
      {
        id: "infra-8",
        keywords: ["wireless roaming", "mobility", "802.11", "roaming"],
        question: "How does wireless client roaming work?",
        answer:
          "When a client moves between APs on the same WLC, that's intra-controller roaming — the WLC simply updates the client's association. Inter-controller roaming (client moves to an AP joined to a different WLC) requires the controllers to be in the same mobility group, exchanging client state so the session persists without a full re-authentication, which is critical for latency-sensitive traffic like voice.",
      },
    ],
  },
  {
    id: "assurance",
    title: "Network Assurance",
    blueprint: "ENCOR 350-401 · Domain 4",
    weight: "10%",
    description: "Monitoring, telemetry, and troubleshooting tools.",
    entries: [
      {
        id: "assur-1",
        keywords: ["netflow", "flow export", "traffic analysis"],
        question: "What is NetFlow used for?",
        answer:
          "NetFlow collects statistics on IP traffic flows (defined by source/destination IP, ports, protocol, interface, and ToS) as they pass through a router or switch, then exports flow records to a collector for analysis. It's used for traffic engineering, capacity planning, security/anomaly detection, and billing — without capturing full packet payloads.",
      },
      {
        id: "assur-2",
        keywords: ["span", "rspan", "erspan", "port mirroring"],
        question: "What's the difference between SPAN, RSPAN, and ERSPAN?",
        answer:
          "SPAN mirrors traffic from a source port/VLAN to a destination port on the same switch for local capture. RSPAN extends this across switches using a dedicated RSPAN VLAN to carry mirrored traffic over a trunk. ERSPAN goes further by encapsulating mirrored traffic in GRE, allowing it to be sent across a routed (Layer 3) network to a remote analyzer.",
      },
      {
        id: "assur-3",
        keywords: ["syslog", "logging severity"],
        question: "What are the syslog severity levels?",
        answer:
          "Syslog defines 8 severity levels from 0 (most severe) to 7 (least): 0 Emergency, 1 Alert, 2 Critical, 3 Error, 4 Warning, 5 Notice, 6 Informational, 7 Debugging. A common mnemonic is 'Every Awesome Cisco Engineer Working Notices Immediately, Damnit.' Configuring a logging level includes that level and everything more severe (lower-numbered).",
      },
      {
        id: "assur-4",
        keywords: ["ip sla", "ipsla", "service level agreement"],
        question: "What is IP SLA used for?",
        answer:
          "Cisco IP SLA actively generates synthetic traffic (e.g., ICMP echo, jitter probes, HTTP get) between devices to measure network performance metrics like latency, jitter, packet loss, and availability — commonly used to trigger route/path failover (e.g., via a tracked object in a default route) before real user traffic is impacted.",
      },
      {
        id: "assur-5",
        keywords: ["snmp", "simple network management protocol", "trap", "mib"],
        question: "How does SNMP work?",
        answer:
          "SNMP lets a manager station poll (GET/SET) or receive unsolicited notifications (Traps/Informs) from managed devices about values defined in a MIB (Management Information Base), addressed by OID. SNMPv1/v2c use plaintext community strings for 'authentication'; SNMPv3 adds real authentication and encryption and should be preferred for security.",
      },
    ],
  },
  {
    id: "security",
    title: "Security",
    blueprint: "ENCOR 350-401 · Domain 5",
    weight: "20%",
    description: "AAA, network access control, and infrastructure security.",
    entries: [
      {
        id: "sec-1",
        keywords: ["aaa", "authentication authorization accounting", "tacacs", "radius"],
        question: "What is AAA and how do TACACS+ and RADIUS differ?",
        answer:
          "AAA = Authentication (who you are), Authorization (what you can do), Accounting (what you did). TACACS+ (Cisco-favored for device admin) encrypts the entire packet body and separates authentication/authorization/accounting into distinct exchanges, giving granular command-level authorization — ideal for network device management. RADIUS (industry standard, common for network access/802.1X) only encrypts the password in the access-request, combines authentication and authorization into one exchange, and uses UDP.",
      },
      {
        id: "sec-2",
        keywords: ["802.1x", "dot1x", "port-based authentication", "eap"],
        question: "How does 802.1X port-based authentication work?",
        answer:
          "802.1X involves three roles: the Supplicant (client device), the Authenticator (switch/AP), and the Authentication Server (typically RADIUS, e.g. Cisco ISE). The switch port stays in an unauthorized state — blocking traffic except EAPOL — until the supplicant's credentials are validated by the authentication server via EAP, at which point the port opens for that client's traffic.",
      },
      {
        id: "sec-3",
        keywords: ["dhcp snooping", "dai", "dynamic arp inspection", "ip source guard"],
        question: "What do DHCP Snooping, DAI, and IP Source Guard protect against?",
        answer:
          "DHCP Snooping builds a trusted binding table (IP-to-MAC-to-port) by only trusting DHCP server responses from designated trusted ports, preventing rogue DHCP servers. Dynamic ARP Inspection (DAI) uses that same binding table to validate ARP packets, preventing ARP spoofing/man-in-the-middle attacks. IP Source Guard also uses the binding table to block IP traffic that doesn't match a learned IP-MAC-port binding, preventing IP spoofing.",
      },
      {
        id: "sec-4",
        keywords: ["port security", "mac limiting", "sticky mac"],
        question: "How does port security work?",
        answer:
          "Port security restricts the number and/or identity of MAC addresses allowed on a switchport. When a violation occurs, it can Protect (silently drop), Restrict (drop + log/increment counter), or Shutdown (default — err-disables the port) depending on the configured violation mode. Sticky MAC learns addresses dynamically and saves them to the running config automatically.",
      },
      {
        id: "sec-5",
        keywords: ["ipsec", "ike", "vpn tunnel", "isakmp"],
        question: "What are the phases of an IPsec VPN tunnel?",
        answer:
          "IPsec builds a secure tunnel in two IKE phases. IKE Phase 1 establishes a secure, authenticated management channel (ISAKMP SA) using either Main mode (6 messages, IDs protected) or Aggressive mode (3 messages, faster but less secure). IKE Phase 2 (Quick Mode) negotiates the actual IPsec SAs that protect data traffic, using either ESP (encryption + optional integrity) or AH (integrity only, no encryption) as the security protocol.",
      },
      {
        id: "sec-6",
        keywords: ["trustsec", "sgt", "security group tag", "macsec"],
        question: "What is Cisco TrustSec and SGT-based policy?",
        answer:
          "Cisco TrustSec tags traffic with a Security Group Tag (SGT) based on the user/device identity rather than IP address, then enforces policy (SGACLs) based on that tag as traffic moves through the network — this decouples security policy from network topology/addressing, which is essential in an SD-Access fabric. MACsec (802.1AE) is the related link-layer encryption standard that can protect the SGT and payload hop-by-hop.",
      },
      {
        id: "sec-7",
        keywords: ["wpa2", "wpa3", "wireless security", "psk", "enterprise wireless"],
        question: "How does wireless security differ between WPA2 and WPA3?",
        answer:
          "WPA2 uses AES-CCMP for encryption and either PSK (a shared passphrase, vulnerable to offline dictionary attacks if the passphrase is weak) or 802.1X/EAP (Enterprise, per-user credentials) for authentication. WPA3 replaces PSK with SAE (Simultaneous Authentication of Equals), which resists offline dictionary attacks and provides forward secrecy, and mandates stronger encryption (e.g., AES-256 in WPA3-Enterprise 192-bit mode).",
      },
    ],
  },
  {
    id: "automation",
    title: "Automation & Programmability",
    blueprint: "ENCOR 350-401 · Domain 6",
    weight: "15%",
    description: "APIs, data formats, and network automation tools.",
    entries: [
      {
        id: "auto-1",
        keywords: ["rest api", "restful", "http methods", "get post put"],
        question: "What is a REST API and which HTTP methods matter?",
        answer:
          "REST (Representational State Transfer) is an architectural style for stateless APIs over HTTP, where resources are addressed by URLs. Key methods: GET (retrieve, safe/idempotent), POST (create), PUT (replace/update, idempotent), PATCH (partial update), DELETE (remove, idempotent). Responses use standard status codes — 2xx success, 4xx client error, 5xx server error.",
      },
      {
        id: "auto-2",
        keywords: ["json", "xml", "yaml", "data format", "data encoding"],
        question: "How do JSON, XML, and YAML differ?",
        answer:
          "JSON uses key-value pairs with braces/brackets — compact, widely used in REST APIs, native to JavaScript. XML uses nested tags with a strict schema (XSD) — more verbose, common in older/enterprise systems (e.g., NETCONF). YAML uses indentation for structure — very human-readable, the standard format for Ansible playbooks and Kubernetes manifests. All three represent the same kinds of structured data, just with different syntax and use-case fit.",
      },
      {
        id: "auto-3",
        keywords: ["ansible", "puppet", "chef", "configuration management", "idempotent"],
        question: "How do Ansible, Puppet, and Chef compare?",
        answer:
          "Ansible is agentless (uses SSH), push-based, and configuration is written in YAML playbooks — easiest to get started with in networking. Puppet and Chef are agent-based (need software installed on managed nodes) and pull-based (nodes check in periodically), using their own DSLs (Puppet's declarative language, Chef's Ruby-based recipes). All three aim for idempotency — running the same configuration repeatedly produces the same end state without unintended side effects.",
      },
      {
        id: "auto-4",
        keywords: ["netconf", "restconf", "yang"],
        question: "What are NETCONF, RESTCONF, and YANG?",
        answer:
          "YANG is a data modeling language that defines the structure and constraints of configuration/operational data for a network device — it's the schema. NETCONF is a protocol (over SSH) that uses YANG-modeled XML payloads to configure devices with operations like <get-config>, <edit-config>, and <commit>, supporting distinct candidate/running datastores. RESTCONF exposes that same YANG-modeled data over a RESTful HTTP interface using JSON or XML, making it easier to integrate with typical web tooling.",
      },
      {
        id: "auto-5",
        keywords: ["sdn controller", "northbound southbound", "api"],
        question: "What are northbound and southbound APIs?",
        answer:
          "In an SDN/controller architecture, southbound APIs/protocols (e.g., NETCONF, OpenFlow, CLI/SNMP) let the controller talk down to managed network devices. Northbound APIs (typically REST/JSON) let applications, orchestration tools, or the GUI talk up to the controller to request services or retrieve data — this is how Cisco DNA Center exposes its Intent API, for example.",
      },
    ],
  },
];

export const allEntries: QAEntry[] = categories.flatMap((c) => c.entries);
