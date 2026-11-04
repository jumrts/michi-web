<!--
@component MarketingPanel

Marketing panel used to present product messaging, progress indicators, and supporting content.
-->

<script lang="ts">
	import TitleStack from "../atoms/TitleStack.svelte";

	const context: string = "metas, rotina e financeiro";
	const title: string = "Meu painel";
	const side: "left" | "right" | "center" = 	"left";
	const textCenter: string = "Sua vida, em um só lugar.";
	const secondaryText: string = 
		"Metas, rotina, dinheiro e pequenos passos. Tudo organizado para você enxergar o quanto já avançou.";
	const gap: string = "gap-4";

</script>

<div class="flex h-full min-h-0 flex-col justify-between p-10">

	<TitleStack
		secondaryText={context}
		primaryText={title}
		side={side}
		primarySize="text-xl"
		secondarySize="text-xs"
	/>

	<div class="flex flex-col gap-2">

		<span class="text-bd-focus text-2xl font-light">
			一歩ずつ
		</span>

		<TitleStack
			primaryText={textCenter}
			side={side}
			primarySize="text-xl"
			secondaryText={secondaryText}
			secondarySize="text-sm"
			gap={gap}
		/>
	
	</div>

	<div class="gap-5 flex flex-col">
		<div class="w-full border-t border-bd-focus/20"></div>

		<div class="flex flex-row gap-5 justify-between">

			<TitleStack
				primaryText="42%"
				primarySize="text-2xl"
				secondaryText="das metas do ano"
				secondarySize="text-xs"
			/>

			<TitleStack
				primaryText="12"
				primarySize="text-2xl"
				secondaryText="dias seguidos de treino"
				secondarySize="text-xs"
			/>

			<TitleStack
				primaryText="R$ 1,7k"
				primarySize="text-2xl"
				secondaryText="a receber de volta"
				secondarySize="text-xs"
			/>

		</div>	
	</div>	
</div>