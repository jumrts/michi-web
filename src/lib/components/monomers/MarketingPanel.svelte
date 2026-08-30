<!--
@component MarketingPanel

Marketing panel used to present product messaging, progress indicators, and supporting content.
-->

<script lang="ts">
	import TitleStack from "../atoms/TitleStack.svelte";

	const context: string = "metas, rotina e financeiro";
	const title: string = "Meu painel";
	const side: "left" | "right" | "center" = 	"left";
	const textCenter: string = "Sua planilha, finalmente visível.";
	const secondaryText: string = 
		"Tudo o que você já controla no Sheets — contas divididas, cronograma da semana, \
		kanji revisado, metas de longo prazo — reunido num só lugar que abre no seu dia de hoje.";
	const gap: string = "gap-4";

</script>

<div class="flex h-full min-h-0 flex-col justify-between p-10">

	<TitleStack
		secondaryText={context}
		primaryText={title}
		side={side}
		primarySize="text-2xl"
		secondarySize="text-[18px]"
	/>

	<div class="flex flex-col gap-8 w-1/2">

		<span class="text-[#641531] text-4xl font-light">
			一歩ずつ
		</span>

		<TitleStack
			primaryText={textCenter}
			side={side}
			primarySize="text-4xl"
			secondaryText={secondaryText}
			secondarySize="text-xl"
			gap={gap}
		/>
	
	</div>

	<div class="gap-5 flex flex-col">
		<div class="w-full border-t border-1 border-[#D7D4D4]"></div>

		<div class="flex flex-row gap-5 justify-between">

			<TitleStack
				primaryText="42%"
				primarySize="text-3xl"
				secondaryText="das metas do ano"
				secondarySize="text-base"
			/>

			<TitleStack
				primaryText="12"
				primarySize="text-3xl"
				secondaryText="dias seguidos de treino"
				secondarySize="text-base"
			/>

			<TitleStack
				primaryText="R$ 1,7k"
				primarySize="text-3xl"
				secondaryText="a receber de volta"
				secondarySize="text-base"
			/>

		</div>	
	</div>	
</div>