<script lang="ts">
	import { onMount } from 'svelte';

	interface GitHubRepo {
		id: number;
		name: string;
		description: string | null;
		html_url: string;
		stargazers_count: number;
		forks_count: number;
		language: string | null;
		updated_at: string;
		topics: string[];
	}

	let repos = $state<GitHubRepo[]>([]);
	let loading = $state(true);
	let error = $state<string | null>(null);
	let mounted = $state(false);

	onMount(() => {
		mounted = true;
		fetchRepos();
	});

	async function fetchRepos() {
		try {
			const response = await fetch(
				'https://api.github.com/users/aungmyokyaw/repos?sort=updated&per_page=100&type=public'
			);
			if (!response.ok) throw new Error('Failed to fetch repositories');
			const data: GitHubRepo[] = await response.json();
			repos = data.filter((repo) => !repo.name.includes('.github.io')).slice(0, 12);
		} catch (e) {
			error = e instanceof Error ? e.message : 'Unknown error';
		} finally {
			loading = false;
		}
	}

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
	}

	function getLanguageColor(language: string | null): string {
		const colors: Record<string, string> = {
			TypeScript: '#3178c6',
			JavaScript: '#f7df1e',
			Python: '#3776ab',
			Rust: '#dea584',
			Go: '#00add8',
			Ruby: '#cc342d',
			Java: '#b07219',
			'C++': '#f34b7d',
			C: '#555555',
			Shell: '#89e051',
			HTML: '#e34c26',
			CSS: '#563d7c',
			Vue: '#41b883',
			Svelte: '#ff3e00'
		};
		return colors[language || ''] || '#c4a77d';
	}
</script>

<svelte:head>
	<title>Aung Myo Kyaw — Software Engineer</title>
	<meta
		name="description"
		content="Personal website of Aung Myo Kyaw, a software engineer passionate about building elegant solutions."
	/>
</svelte:head>

<!-- Noise texture overlay -->
<div class="noise-overlay"></div>

<main class="main-container" class:mounted>
	<!-- Hero Section -->
	<section class="hero">
		<div class="hero-content">
			<div class="hero-text">
				<p class="greeting">こんにちは</p>
				<h1 class="name">
					<span class="name-line">Aung Myo</span>
					<span class="name-line accent">Kyaw</span>
				</h1>
				<p class="tagline">Software Engineer crafting digital experiences</p>
			</div>

			<div class="hero-links">
				<a
					href="https://www.aungmyokyaw.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="primary-link"
				>
					<span class="link-text">Visit Main Website</span>
					<span class="link-arrow">→</span>
				</a>
				<a
					href="https://github.com/aungmyokyaw"
					target="_blank"
					rel="noopener noreferrer"
					class="secondary-link"
				>
					<svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
					<span>@aungmyokyaw</span>
				</a>
			</div>
		</div>

		<div class="hero-decoration">
			<div class="circle circle-1"></div>
			<div class="circle circle-2"></div>
			<div class="vertical-line"></div>
		</div>
	</section>

	<!-- Repos Section -->
	<section class="repos-section">
		<header class="section-header">
			<span class="section-number">01</span>
			<h2 class="section-title">Open Source</h2>
			<p class="section-subtitle">Selected public repositories</p>
		</header>

		{#if loading}
			<div class="loading-state">
				<div class="loading-dots">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<p>Fetching repositories...</p>
			</div>
		{:else if error}
			<div class="error-state">
				<p>Unable to load repositories</p>
				<button onclick={() => fetchRepos()} class="retry-btn">Retry</button>
			</div>
		{:else}
			<div class="repos-grid">
				{#each repos as repo, i (repo.id)}
					<a
						href={repo.html_url}
						target="_blank"
						rel="noopener noreferrer"
						class="repo-card"
						style="animation-delay: {i * 0.05}s"
					>
						<div class="repo-header">
							<h3 class="repo-name">{repo.name}</h3>
							<span class="repo-date">{formatDate(repo.updated_at)}</span>
						</div>

						{#if repo.description}
							<p class="repo-description">{repo.description}</p>
						{/if}

						<div class="repo-footer">
							{#if repo.language}
								<span class="repo-language">
									<span
										class="language-dot"
										style="background-color: {getLanguageColor(repo.language)}"
									></span>
									{repo.language}
								</span>
							{/if}

							<div class="repo-stats">
								{#if repo.stargazers_count > 0}
									<span class="stat">
										<svg viewBox="0 0 16 16" fill="currentColor">
											<path
												d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"
											/>
										</svg>
										{repo.stargazers_count}
									</span>
								{/if}
								{#if repo.forks_count > 0}
									<span class="stat">
										<svg viewBox="0 0 16 16" fill="currentColor">
											<path
												d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
											/>
										</svg>
										{repo.forks_count}
									</span>
								{/if}
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</section>

	<!-- Footer -->
	<footer class="site-footer">
		<div class="footer-content">
			<p class="footer-text">© {new Date().getFullYear()} Aung Myo Kyaw</p>
			<p class="footer-quote">"Simplicity is the ultimate sophistication"</p>
		</div>
	</footer>
</main>

<style>
	/* Noise overlay for texture */
	.noise-overlay {
		position: fixed;
		top: -50%;
		left: -50%;
		right: -50%;
		bottom: -50%;
		width: 200%;
		height: 200%;
		background: transparent
			url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
		opacity: 0.03;
		pointer-events: none;
		z-index: 1000;
		animation: grain 8s steps(10) infinite;
	}

	/* Main container */
	.main-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		opacity: 0;
		transition: opacity 0.6s ease;
	}

	.main-container.mounted {
		opacity: 1;
	}

	/* Hero Section */
	.hero {
		min-height: 85vh;
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 4rem;
		padding: 4rem 0;
		position: relative;
	}

	.hero-content {
		animation: fadeInUp 0.8s ease forwards;
	}

	.greeting {
		font-family: var(--font-display);
		font-size: 1.25rem;
		color: var(--color-accent);
		margin-bottom: 1.5rem;
		font-style: italic;
		letter-spacing: 0.1em;
		animation: slideIn 0.6s ease 0.2s both;
	}

	.name {
		font-family: var(--font-display);
		font-size: clamp(3rem, 10vw, 6rem);
		font-weight: 300;
		line-height: 1.1;
		margin-bottom: 1.5rem;
		letter-spacing: -0.02em;
	}

	.name-line {
		display: block;
	}

	.name-line.accent {
		color: var(--color-accent);
		font-style: italic;
	}

	.tagline {
		font-size: 1rem;
		color: var(--color-muted);
		max-width: 400px;
		margin-bottom: 3rem;
		animation: fadeIn 0.6s ease 0.4s both;
	}

	.hero-links {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		animation: fadeIn 0.6s ease 0.6s both;
	}

	.primary-link {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 2rem;
		background: var(--color-paper);
		color: var(--color-ink);
		text-decoration: none;
		font-size: 0.875rem;
		font-weight: 500;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.primary-link::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: var(--color-accent);
		transition: left 0.3s ease;
		z-index: 0;
	}

	.primary-link:hover::before {
		left: 0;
	}

	.primary-link .link-text,
	.primary-link .link-arrow {
		position: relative;
		z-index: 1;
	}

	.primary-link:hover {
		color: var(--color-ink);
	}

	.link-arrow {
		transition: transform 0.3s ease;
	}

	.primary-link:hover .link-arrow {
		transform: translateX(4px);
	}

	.secondary-link {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		color: var(--color-muted);
		text-decoration: none;
		font-size: 0.875rem;
		transition: color 0.3s ease;
		padding: 0.5rem 0;
	}

	.secondary-link:hover {
		color: var(--color-paper);
	}

	.github-icon {
		width: 20px;
		height: 20px;
	}

	/* Hero decoration */
	.hero-decoration {
		position: relative;
		width: 200px;
		height: 400px;
		display: none;
	}

	@media (min-width: 768px) {
		.hero-decoration {
			display: block;
		}
	}

	.circle {
		position: absolute;
		border: 1px solid var(--color-subtle);
		border-radius: 50%;
		animation: fadeIn 1s ease 0.8s both;
	}

	.circle-1 {
		width: 180px;
		height: 180px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.circle-2 {
		width: 120px;
		height: 120px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-color: var(--color-accent-dim);
	}

	.vertical-line {
		position: absolute;
		left: 50%;
		top: 0;
		bottom: 0;
		width: 1px;
		background: linear-gradient(
			to bottom,
			transparent,
			var(--color-subtle) 30%,
			var(--color-subtle) 70%,
			transparent
		);
		animation: fadeIn 1s ease 1s both;
	}

	/* Repos Section */
	.repos-section {
		padding: 6rem 0;
	}

	.section-header {
		margin-bottom: 4rem;
		animation: fadeInUp 0.6s ease both;
	}

	.section-number {
		display: block;
		font-size: 0.75rem;
		color: var(--color-accent);
		letter-spacing: 0.2em;
		margin-bottom: 0.5rem;
	}

	.section-title {
		font-family: var(--font-display);
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 300;
		margin-bottom: 0.5rem;
	}

	.section-subtitle {
		color: var(--color-muted);
		font-size: 0.875rem;
	}

	/* Loading state */
	.loading-state {
		text-align: center;
		padding: 4rem 0;
		color: var(--color-muted);
	}

	.loading-dots {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.loading-dots span {
		width: 8px;
		height: 8px;
		background: var(--color-accent);
		border-radius: 50%;
		animation: pulse 1.4s ease-in-out infinite;
	}

	.loading-dots span:nth-child(2) {
		animation-delay: 0.2s;
	}

	.loading-dots span:nth-child(3) {
		animation-delay: 0.4s;
	}

	/* Error state */
	.error-state {
		text-align: center;
		padding: 4rem 0;
		color: var(--color-muted);
	}

	.retry-btn {
		margin-top: 1rem;
		padding: 0.75rem 1.5rem;
		background: transparent;
		border: 1px solid var(--color-subtle);
		color: var(--color-paper);
		font-family: var(--font-mono);
		font-size: 0.875rem;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.retry-btn:hover {
		border-color: var(--color-accent);
		color: var(--color-accent);
	}

	/* Repos grid */
	.repos-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1.5rem;
	}

	.repo-card {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid var(--color-subtle);
		text-decoration: none;
		color: var(--color-paper);
		transition: all 0.3s ease;
		animation: fadeInUp 0.5s ease both;
	}

	.repo-card:hover {
		border-color: var(--color-accent-dim);
		background: rgba(255, 255, 255, 0.04);
		transform: translateY(-2px);
	}

	.repo-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 0.75rem;
	}

	.repo-name {
		font-family: var(--font-mono);
		font-size: 1rem;
		font-weight: 500;
		color: var(--color-paper);
		word-break: break-word;
	}

	.repo-date {
		font-size: 0.75rem;
		color: var(--color-muted);
		white-space: nowrap;
	}

	.repo-description {
		font-size: 0.875rem;
		color: var(--color-muted);
		line-height: 1.5;
		flex-grow: 1;
		margin-bottom: 1rem;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.repo-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		padding-top: 1rem;
		border-top: 1px solid var(--color-subtle);
	}

	.repo-language {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.75rem;
		color: var(--color-muted);
	}

	.language-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}

	.repo-stats {
		display: flex;
		gap: 1rem;
	}

	.stat {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		font-size: 0.75rem;
		color: var(--color-muted);
	}

	.stat svg {
		width: 14px;
		height: 14px;
	}

	/* Footer */
	.site-footer {
		padding: 4rem 0 2rem;
		border-top: 1px solid var(--color-subtle);
		margin-top: 4rem;
	}

	.footer-content {
		text-align: center;
	}

	.footer-text {
		font-size: 0.75rem;
		color: var(--color-muted);
		margin-bottom: 0.5rem;
	}

	.footer-quote {
		font-family: var(--font-display);
		font-size: 0.875rem;
		font-style: italic;
		color: var(--color-accent-dim);
	}

	/* Responsive */
	@media (max-width: 768px) {
		.main-container {
			padding: 1rem;
		}

		.hero {
			min-height: 70vh;
			padding: 2rem 0;
		}

		.repos-section {
			padding: 3rem 0;
		}

		.repos-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
